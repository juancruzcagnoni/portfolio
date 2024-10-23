"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}
