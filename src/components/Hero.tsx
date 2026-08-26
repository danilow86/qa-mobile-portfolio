export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
        QA Engineer · Mobile Engineer
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
        Building software
        <span className="text-zinc-400"> people can trust.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        I work across software quality and mobile development,
        combining engineering, automation and testing to build
        reliable digital experiences.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="rounded-full bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-zinc-200"
        >
          View my work
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-6 py-3 text-center font-medium transition hover:bg-zinc-900"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}