import React from 'react'

export default function Experience() {
  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-4 md:py-10">
      <h2 className="text-base md:text-lg font-bold text-primary dark:text-secondary mb-6">Experience</h2>

      <div className="relative">
        {/* Línea vertical continua */}
        <div className="absolute left-0 top-0 h-full w-[1px] bg-accent"></div>

        <div className="space-y-12">
          <div className="relative pl-8">
            {/* Punto en la línea temporal */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[5px]"></div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-primary dark:text-secondary">SAP Fiori Developer</h3>
                <span className="text-sm text-accent">nov. 2023 - Present</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-primary dark:text-secondary">DL Consultores · Full-time</p>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I have developed and adjusted SAPUI5 applications both in BTP-Cloud Foundry and in BTP-NEO and FIORI on
                premise, as well as ODATA services. Additionally, I have worked with CAP services and HANA Cloud databases,
                performing unit testing and problem analysis to improve the quality and functionality of the applications.
              </p>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[5px]"></div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-primary dark:text-secondary">Frontend Developer</h3>
                <span className="text-sm text-accent">ago. 2023 - oct. 2023</span>
              </div>
              <p className="text-sm font-medium text-primary dark:text-secondary">Propulz · Contract</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Development of the agency's website, using technologies such as Next.js, styled-components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}