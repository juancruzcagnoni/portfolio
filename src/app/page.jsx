import React from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function IndexPage() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <header className="flex flex-col items-center py-14 sm:py-20 md:py-28">
        <span className="mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm text-green bg-light-green py-1 px-4 sm:px-6 md:px-7 rounded-full font-semibold">
          AVAILABLE FOR WORK
        </span>
        <h1
          className={`${spaceGrotesk.className} mb-6 sm:mb-8 md:mb-10 font-medium text-4xl sm:text-5xl md:text-6xl text-center tracking-tighter`}
        >
          Hey! I’m Juan Cruz Cagnoni, <br />
          <span className="text-orange">Frontend Developer & Designer</span>
        </h1>
        <p className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base text-grey text-center">
          Figma ipsum component variant main layer. Component select underline
          device group group bold move. Variant style thumbnail flatten arrow list
          move move line slice.
        </p>
        <button className="btn">Get in touch</button>
      </header>
    </div>
  );
}

export default IndexPage;
