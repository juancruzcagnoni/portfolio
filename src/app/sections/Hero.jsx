import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    p1: "I'm from San Antonio de Areco, Buenos Aires, Argentina. I hold a three-year technical degree in ",
    p1b: "Web Design and Programming",
    p1c: " from ",
    p1d: "Escuela Da Vinci",
    p1e: ", where I developed a strong foundation in front-end and back-end technologies.",
    p2: "Passionate about technology and problem-solving, now I'm working on SAP BTP and Fiori development, creating user-friendly and efficient business applications. In November 2023, I joined  ",
    p2b: "DL Consultores",
    p2c: " as an ",
    p2d: "SAP BTP & Fiori developer",
    p2e: ", where I work on designing and implementing modern enterprise solutions.",
    p3: "Beyond coding, I enjoy ",
    p3b: "playing football",
    p3c: ", a sport that has taught me teamwork, strategy, and perseverance—qualities that I bring to my professional projects as well."
  },
  es: {
    p1: "Soy de San Antonio de Areco, Buenos Aires, Argentina. Tengo un título técnico de tres años en ",
    p1b: "Diseño y Programación Web",
    p1c: " de la ",
    p1d: "Escuela Da Vinci",
    p1e: ", donde desarrollé una sólida base en tecnologías front-end y back-end.",
    p2: "Apasionado por la tecnología y la resolución de problemas, actualmente trabajo en desarrollo SAP BTP y Fiori, creando aplicaciones empresariales eficientes y fáciles de usar. En noviembre de 2023 me uní a ",
    p2b: "DL Consultores",
    p2c: " como ",
    p2d: "desarrollador SAP BTP & Fiori",
    p2e: ", donde participo en el diseño e implementación de soluciones empresariales modernas.",
    p3: "Fuera del código, disfruto de ",
    p3b: "jugar al fútbol",
    p3c: ", un deporte que me enseñó trabajo en equipo, estrategia y perseverancia; cualidades que también aplico en mis proyectos profesionales."
  }
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <div className="space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          {t.p1}
          <span className="font-medium text-primary dark:text-secondary">{t.p1b}</span>
          {t.p1c}
          <a href="https://davinci.edu.ar/" target="_blank" className="font-medium text-primary dark:text-secondary decoration-primary dark:decoration-secondary underline">{t.p1d}</a>
          {t.p1e}
        </p>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          {t.p2}
          <a href="https://dlconsultores.com.ar/" target="_blank" className="font-medium text-primary dark:text-secondary decoration-primary dark:decoration-secondary underline">{t.p2b}</a>
          {t.p2c}
          <span className="font-medium text-primary dark:text-secondary">{t.p2d}</span>
          {t.p2e}
        </p>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          {t.p3}
          <span className="font-medium text-primary dark:text-secondary">{t.p3b}</span>
          {t.p3c}
        </p>
      </div>
    </section>
  );
}
