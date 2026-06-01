import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import Faq from "./components/Faq";
import BookCTA from "./components/BookCTA";
import { about, business, faqs, hero, services, why } from "./content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white pt-32 pb-24 sm:pt-44 sm:pb-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-mist to-white" />
          <div className="relative mx-auto max-w-content px-5 text-center">
            <Reveal>
              <p className="text-[15px] font-medium text-subtle">
                {hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mx-auto mt-4 max-w-3xl text-[40px] font-semibold leading-[1.07] tracking-tight text-ink sm:text-[64px]">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-subtle sm:text-[21px]">
                {hero.sub}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookCTA className="rounded-full bg-ink px-7 py-3 text-[16px] font-medium text-white transition hover:bg-ink/85">
                  {business.cta}
                </BookCTA>
                <a
                  href="#services"
                  className="rounded-full px-7 py-3 text-[16px] font-medium text-ink transition hover:opacity-60"
                >
                  Explore our services →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] bg-mist shadow-[0_30px_70px_-30px_rgba(0,0,0,0.3)]">
                <img
                  src="/about.jpg"
                  alt={about.imageAlt}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
            </Reveal>

            {/* Text */}
            <div className="order-first lg:order-none">
              <Reveal>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  {about.eyebrow}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[40px]">
                  {about.headline}
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[18px] leading-relaxed text-subtle">
                  {about.body}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="mt-8 space-y-3">
                  {about.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] text-white">
                        ✓
                      </span>
                      <span className="text-[16px] text-ink">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-20 bg-mist py-24 sm:py-32">
          <div className="mx-auto max-w-content px-5">
            <Reveal>
              <h2 className="text-center text-[34px] font-semibold tracking-tight text-ink sm:text-[44px]">
                {services.title}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-4 max-w-xl text-center text-[18px] leading-relaxed text-subtle">
                {services.intro}
              </p>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.items.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 90}>
                  <div className="group h-full rounded-3xl bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-[18px] font-semibold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-6 text-[20px] font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-subtle">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="scroll-mt-20 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-content px-5">
            <Reveal>
              <h2 className="text-center text-[34px] font-semibold tracking-tight text-ink sm:text-[44px]">
                {why.title}
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-12 sm:grid-cols-3">
              {why.items.map((w, i) => (
                <Reveal key={w.title} delay={i * 90}>
                  <div className="text-center sm:text-left">
                    <h3 className="text-[21px] font-semibold tracking-tight text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-subtle">
                      {w.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-3">
              {why.stats.map((stat) => (
                <div key={stat.label} className="bg-white px-6 py-10 text-center">
                  <p className="text-[22px] font-semibold tracking-tight text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[14px] text-subtle">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 bg-mist py-24 sm:py-32">
          <div className="mx-auto max-w-content px-5">
            <Reveal>
              <h2 className="mb-12 text-center text-[34px] font-semibold tracking-tight text-ink sm:text-[44px]">
                {faqs.title}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Faq />
            </Reveal>
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="scroll-mt-20 bg-ink py-24 sm:py-32">
          <div className="mx-auto max-w-content px-5 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-[34px] font-semibold tracking-tight text-white sm:text-[48px]">
                Ready to move your project forward?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-5 max-w-xl text-[18px] leading-relaxed text-white/70">
                Tell us about your initiative. We&apos;ll outline a clear path to
                delivery and the right level of support.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <BookCTA className="mt-9 inline-block rounded-full bg-white px-8 py-3.5 text-[16px] font-medium text-ink transition hover:bg-white/90">
                {business.cta}
              </BookCTA>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-[14px] text-white/55">
                or email us at{" "}
                <a
                  href={`mailto:${business.email}`}
                  className="underline underline-offset-4 transition hover:text-white"
                >
                  {business.email}
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
