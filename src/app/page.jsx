"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <>
      <div className="py-4 md:py-10">
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </>
  );
}
