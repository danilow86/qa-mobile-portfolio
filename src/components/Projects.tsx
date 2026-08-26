const projects = [
  {
    title: "Mobile Test Automation",
    description:
      "Automated critical mobile user journeys with a focus on reliability and regression coverage.",
    technologies: ["Appium", "Java", "Android"],
  },
  {
    title: "API Testing",
    description:
      "Designed API test scenarios covering positive, negative and edge cases.",
    technologies: ["REST", "Postman", "Automation"],
  },
  {
    title: "QA Engineering",
    description:
      "Explored application behaviour, identified defects and improved testing strategies.",
    technologies: ["QA", "Testing", "SQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Selected work
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Projects
      </h2>

      <div className="mt-12 grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-zinc-800 p-6 transition hover:border-zinc-600 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-sm text-zinc-500"
                    >
                      #{technology}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-zinc-500 transition group-hover:translate-x-1">
                View →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}