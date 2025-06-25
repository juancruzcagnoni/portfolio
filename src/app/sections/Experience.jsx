import React from 'react';

export default function Experience() {
  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <h2 className="font-instrument-serif text-2xl md:text-3xl text-primary dark:text-secondary mb-6">Experience</h2>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-accent"></div>

        <div className="space-y-8 md:space-y-12">
          <div className="relative pl-6 md:pl-8">
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[5px]"></div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-primary dark:text-secondary">SAP Fiori Developer</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">nov. 2023 - Present</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-primary dark:text-secondary">DL Consultores · Full-time</p>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I develop and enhance SAPUI5 applications on SAP BTP (Cloud Foundry and NEO) and FIORI on-premise, ensuring scalable, high-performance solutions. I work extensively with OData services and CAP (Cloud Application Programming) services, integrating with HANA Cloud databases.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I also manage the full lifecycle of SAP applications, including:</p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside ml-2 md:ml-4 my-2">
                <li>Automated deployments using CI/CD pipelines</li>
                <li>Application transport management with SAP TMS</li>
                <li>Integration and publication on SAP Workzone</li>
                <li>Design and execution of unit tests to ensure code quality</li>
                <li>Problem analysis and performance optimization</li>
              </ul>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I contribute to projects across various industries, delivering enterprise-grade solutions aligned with SAP best practices.
              </p>
            </div>
          </div>

          <div className="relative pl-6 md:pl-8">
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[5px]"></div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-primary dark:text-secondary">Frontend Developer</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">aug. 2023 - oct. 2023</span>
              </div>
              <p className="text-sm font-medium text-primary dark:text-secondary">Propulz · Contract</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Development of the agency&apos;s website, using technologies such as Next.js, styled-components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}