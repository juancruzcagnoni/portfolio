import React from "react";

const CTA = () => {
  return (
    <div className="py-28 flex flex-col items-center">
      <h2 className="font-serif text-secondary text-center text-2xl sm:text-3xl mb-12">
        Do you want to work with me?
      </h2>
      <a
        href="mailto:juancagnoni@gmail.com"
        className="bg-secondary text-primary px-5 py-2.5 rounded-md font-semibold"
      >
        Contact me
      </a>
    </div>
  );
};

export default CTA;
