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
        desc1: 'I develop and enhance SAPUI5 applications on SAP BTP (Cloud Foundry and NEO) and FIORI on-premise, ensuring scalable, high-performance solutions. I work extensively with OData services and CAP (Cloud Application Programming) services, integrating with HANA Cloud databases.',
        desc2: 'I also manage the full lifecycle of SAP applications, including:',
        list: [
          'Automated deployments using CI/CD pipelines',
          'Application transport management with SAP TMS',
          'Integration and publication on SAP Workzone',
          'Design and execution of unit tests to ensure code quality',
          'Problem analysis and performance optimization',
        ],
        desc3: 'I contribute to projects across various industries, delivering enterprise-grade solutions aligned with SAP best practices.'
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
        desc1: 'Desarrollo y mejoro aplicaciones SAPUI5 en SAP BTP (Cloud Foundry y NEO) y FIORI on-premise, asegurando soluciones escalables y de alto rendimiento. Trabajo ampliamente con servicios OData y CAP (Cloud Application Programming), integrando bases de datos HANA Cloud.',
        desc2: 'También gestiono el ciclo completo de vida de aplicaciones SAP, incluyendo:',
        list: [
          'Despliegues automatizados usando pipelines CI/CD',
          'Gestión de transportes de aplicaciones con SAP TMS',
          'Integración y publicación en SAP Workzone',
          'Diseño y ejecución de pruebas unitarias para asegurar la calidad del código',
          'Análisis de problemas y optimización de rendimiento',
        ],
        desc3: 'Participo en proyectos de diversas industrias, entregando soluciones empresariales alineadas a las mejores prácticas de SAP.'
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
                    {job.company.toLowerCase().includes('full-time') && (
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