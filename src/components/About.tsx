export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            About
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Quality meets engineering.
          </h2>
        </div>

        <div className="space-y-6 text-zinc-400 leading-7">
          <p>
            I am a software professional focused on quality assurance
            and mobile engineering.
          </p>

          <p>
            I enjoy understanding how applications work, finding
            problems before they reach users and building automation
            that makes software more reliable.
          </p>

          <p>
            My approach combines testing, development, APIs,
            automation and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}