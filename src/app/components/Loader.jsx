'use client';

import { useState, useEffect } from 'react';

export default function Loader({ onLoadingComplete, isDataLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isDataLoaded) {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              onLoadingComplete();
            }, 500); 
            return 100;
          }
          return prev + 4; 
        });
      }, 20);
    } else {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 80) {
            clearInterval(timer);
            return 80;
          }
          return prev + 1;
        });
      }, 20);
    }

    return () => clearInterval(timer);
  }, [isDataLoaded, onLoadingComplete]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary dark:bg-primary transition-all duration-500">
      <h1 className="text-lg md:text-xl font-medium text-primary dark:text-secondary mb-4 tracking-tight font-instrument-serif">
        Juan Cruz Cagnoni
      </h1>
      <div className="w-48 md:w-64 h-[2px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-full">
        <div 
          className="h-full bg-primary dark:bg-secondary transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}