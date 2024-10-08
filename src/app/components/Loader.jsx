import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <span className="font-semibold tracking-tight text-secondary text-base mb-5">
        Juan Cruz Cagnoni
      </span>
      <div className="relative w-full max-w-xs">
        <div className="h-0.5 bg-accent absolute left-0 top-0" />
        <div className="h-0.5 bg-accent animate-line" />
      </div>
      <style jsx>{`
        @keyframes line-animation {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-line {
          animation: line-animation 2s ease forwards; 
        }
      `}</style>
    </div>
  );
};

export default Loader;
