import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  en: {
    title: 'Experience',
    jobs: [
      {
        role: 'SAP Fiori Developer',
        date: 'Nov. 2023 - Present',
        company: 'DL Consultores · Full-time',
        desc1: 'SAP BTP & Fiori developer participating in corporate implementation and evolutionary maintenance projects for large-scale clients. Development of Fiori applications (freestyle and Fiori Elements) on SAPUI5 in BTP (Cloud Foundry, NEO) and on-premise, integrating OData services and CAP with HANA Cloud. End-to-end delivery from functional design to productive deployment, with CI/CD pipelines, SAP transport management (TMS), and Workzone integration.',
      },
      {
        role: 'Frontend Developer',
        date: 'Aug. 2023 - Oct. 2023',
        company: 'Propulz · Contract',
        desc1: 'Development of the agency\'s website, using technologies such as Next.js, styled-components.'
      }
    ]
  },
  es: {
    title: 'Experiencia',
    jobs: [
      {
        role: 'Desarrollador SAP Fiori',
        date: 'nov. 2023 - Presente',
        company: 'DL Consultores · Tiempo completo',
        desc1: 'Desarrollador SAP BTP & Fiori participando en proyectos corporativos de implementación y mantenimiento evolutivo para clientes de gran escala. Desarrollo de aplicaciones Fiori (freestyle y Fiori Elements) sobre SAPUI5 en BTP (Cloud Foundry, NEO) y entornos on-premise, integrando servicios OData y CAP con HANA Cloud. Entrega end-to-end desde el diseño funcional hasta el deployment productivo, con pipelines CI/CD, gestión de transportes SAP (TMS) e integración en Workzone.',
      },
      {
        role: 'Desarrollador Frontend',
        date: 'ago. 2023 - oct. 2023',
        company: 'Propulz · Contrato',
        desc1: 'Desarrollo del sitio web de la agencia, utilizando tecnologías como Next.js y styled-components.'
      }
    ]
  }
};

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <h2 className="font-instrument-serif text-2xl md:text-3xl text-primary dark:text-secondary mb-6">{t.title}</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-accent"></div>
        <div className="space-y-8 md:space-y-12">
          {t.jobs.map((job, i) => (
            <div className="relative pl-6 md:pl-8" key={i}>
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[5px]"></div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-primary dark:text-secondary">{job.role}</h3>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{job.date}</span>
                </div>
                {job.company && (
                  <p className="text-sm font-medium text-primary dark:text-secondary flex items-center gap-2">
                    {job.company}
                    {["full-time", "tiempo completo"].some(str =>
                      job.company.toLowerCase().includes(str)
                    ) && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                      )}

                  </p>
                )}
                {job.desc1 && <p className="text-sm text-zinc-600 dark:text-zinc-400">{job.desc1}</p>}
                {job.desc2 && <p className="text-sm text-zinc-600 dark:text-zinc-400">{job.desc2}</p>}
                {job.list && (
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside ml-2 md:ml-4 my-2">
                    {job.list.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                )}
                {job.desc3 && <p className="text-sm text-zinc-600 dark:text-zinc-400">{job.desc3}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}