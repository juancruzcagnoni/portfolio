import React from "react";
import Image from "next/image";

const techs = [
  { label: "SAP BTP",    file: "btp.png"   },
  { label: "React",      file: "react.png"  },
  { label: "SAPUI5",     file: "ui5.png"    },
  { label: "JavaScript", file: "js.png"     },
  { label: "SAP Fiori",  file: "fiori.png"  },
  { label: "Node.js",    file: "node.png"   },
  { label: "Git",        file: "git.png"    },
];

const maskStyle = {
  maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
};

export default function TechCarousel() {
  const list = [...techs, ...techs, ...techs];

  return (
    <div
      className="relative left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] overflow-hidden py-6 group"
      style={maskStyle}
    >
      <div className="flex gap-10 animate-carousel group-hover:[animation-play-state:paused]">
        {list.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 shrink-0 select-none transition-[filter] duration-200"
            style={{ filter: "grayscale(100%)" }}
            onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0%)"}
            onMouseLeave={e => e.currentTarget.style.filter = "grayscale(100%)"}
          >
            <Image
              src={`/icons/${tech.file}`}
              alt={tech.label}
              width={40}
              height={40}
              className="h-6 w-auto object-contain"
              draggable={false}
              unoptimized
            />
            {/* <span className="text-xs text-zinc-400">{tech.label}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
