const skills = {
  "QA & Testing": [
    "Test Automation",
    "API Testing",
    "Mobile Testing",
    "Regression Testing",
    "Functional Testing",
    "Non Functional Testing"
  ],

  Mobile: [
    "Android",
    "iOS",
    "Mobile Automation",
    "REST APIs",
    "Firebase",
  ],

  Engineering: [
    "TypeScript",
    "Java",
    "SQL",
    "Git",
    "CI/CD",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Skills
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Tools & technologies
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <h3 className="text-xl font-semibold">
              {category}
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 px-3 py-2 text-sm text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}