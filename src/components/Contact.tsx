export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="rounded-3xl border border-zinc-800 p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
          Let's build better software.
        </h2>

        <p className="mt-6 max-w-xl text-zinc-400">
          Interested in working together or discussing a project?
          Feel free to get in touch.
        </p>

        <a
          href="mailto:your@email.com"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-black"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}