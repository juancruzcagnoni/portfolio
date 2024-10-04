import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <span className="font-serif text-secondary text-2xl mb-5">
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
          animation: line-animation 1.5s ease forwards; /* Duración y efecto de la animación */
        }
      `}</style>
    </div>
  );
};

export default Loader;
