import Link from "next/link"

export default function Projects() {
  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%] mb-12">
      <h2 className="text-lg md:text-xl font-bold text-primary dark:text-secondary mb-6">
        Projects
      </h2>
      
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-base md:text-lg font-medium text-primary dark:text-secondary">
            Project 1
          </h3>
          <p className="text-sm md:text-base text-primary dark:text-secondary">
            Project 1 description.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base md:text-lg font-medium text-primary dark:text-secondary">
            Project 2
          </h3>
          <p className="text-sm md:text-base text-primary dark:text-secondary">
            Project 2 description.
          </p>
        </div>

        {/* Puedes agregar más proyectos aquí siguiendo el mismo patrón */}
      </div>
    </section>
  )
} 