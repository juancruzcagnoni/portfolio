import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 w-11/12 md:w-2/5 m-auto">
      <h2 className="font-serif text-secondary text-center text-2xl sm:text-3xl">
        What&apos;s about me?
      </h2>
      <div className="flex flex-col lg:flex-row justify-between mt-16 lg:mt-24">
        <div className="bg-secondary p-4 pb-6 flex flex-col items-center">
          <Image src="/icon.jpg" alt="Juan Cruz" width={300} height={300} />
          <span className="text-lg sm:text-xl font-serif text-primary mt-6">
            That's me!
          </span>
        </div>
        <div className="flex flex-col justify-between items-end lg:w-2/4 lg:ml-12 mt-5 md:mt-0">
          <p className="text-base text-secondary">
            Figma ipsum component variant main layer. Device figma content
            boolean community. Invite font move list asset follower. Vertical
            flows selection connection underline asset overflow. Fill opacity
            library project content text background. Object opacity community
            layer rotate background inspect. Asset move clip blur background.
            Layer boolean pen flows community layout. Layout fill scale
            background subtract font device duplicate horizontal. Figjam
            reesizing align device duplicate pen flatten. Figma frame arrange
            line slice. Opacity inspect variant export invite team. Polygon
            device font fill line ipsum.
          </p>
          <span className="font-serif text-lg text-accent">Juan Cruz Cagnoni.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
