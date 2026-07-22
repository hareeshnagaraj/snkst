import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

const IMG = {
  hero: asset("/images/zozan/hq-hero.jpg"),
  intro: asset("/images/zozan/v2-partner-d.jpg"),
  private: asset("/images/zozan/v2-private.jpg"),
  group: asset("/images/zozan/v2-group.jpg"),
  prenatal: asset("/images/zozan/v2-prenatal.jpg"),
  partner: asset("/images/zozan/v2-partner-c.jpg"),
  kids: asset("/images/zozan/v2-kids.jpg"),
  online: asset("/images/zozan/v2-online.jpg"),
  coast: asset("/images/zozan/hq-coast.jpg"),
  beach: asset("/images/zozan/hq-beach.jpg"),
  sea: asset("/images/zozan/hq-sea.jpg"),
  cliff: asset("/images/zozan/hq-cliff.jpg"),
  flowers: asset("/images/zozan/hq-flowers.jpg"),
  sunrise: asset("/images/zozan/hq-sunrise.jpg"),
  mat: asset("/images/zozan/hq-mat.jpg"),
  swim: asset("/images/zozan/hq-swim.jpg"),
  village: asset("/images/zozan/hq-village.jpg"),
  stretch: asset("/images/zozan/hq-stretch.jpg"),
  balance: asset("/images/zozan/v2-partner-b.jpg"),
  meditation: asset("/images/zozan/hq-meditation.jpg"),
  bookBg: asset("/images/zozan/v2-private.jpg"),
  beachGroup: asset("/images/zozan/v2-solo.jpg"),
} as const;

const nav = [
  { label: "Practice", href: "#practice" },
  { label: "Offerings", href: "#offerings" },
  { label: "Kalkan", href: "#kalkan" },
  { label: "About", href: "#about" },
  { label: "Book", href: "#book" },
];

const offerings = [
  {
    title: "Private sessions",
    subtitle: "One-to-one · in person or online",
    body: "Built around your body and goals. Alignment, breath work, strength, or recovery. We move at your pace.",
    image: IMG.private,
    tag: "Most booked",
  },
  {
    title: "Group classes",
    subtitle: "Studio, lawn, and open rooms",
    body: "Open to all levels. Clear cues, real community, and sequences that leave you steady rather than wiped out.",
    image: IMG.group,
    tag: "Kalkan",
  },
  {
    title: "Prenatal yoga",
    subtitle: "Breathe, nurture, grow",
    body: "Gentle practice for pregnancy: hip and back relief, breath for birth, and a calm space to prepare.",
    image: IMG.prenatal,
    tag: "Speciality",
  },
  {
    title: "Partner yoga",
    subtitle: "Move together, feel together",
    body: "Trust, balance, and a bit of fun. No partner required if you want to join solo with an open group.",
    image: IMG.partner,
    tag: "Limited spots",
  },
  {
    title: "Kids yoga",
    subtitle: "Çocuk yogası · Sundays 13:00",
    body: "Movement, games, and free play at Payava Otel. Age-appropriate classes for curious little bodies.",
    image: IMG.kids,
    tag: "Family",
  },
  {
    title: "Online classes",
    subtitle: "From anywhere",
    body: "Private sessions over video when you cannot make it to Kalkan. Same attention, your living room.",
    image: IMG.online,
    tag: "Worldwide",
  },
];

const gallery = [
  { src: IMG.meditation, alt: "Outdoor yoga practice at sunrise", span: "md:col-span-2 md:row-span-2" },
  { src: IMG.beach, alt: "Mediterranean beach", span: "" },
  { src: IMG.balance, alt: "Studio yoga pose", span: "" },
  { src: IMG.sea, alt: "Turquoise coastline", span: "md:col-span-2" },
  { src: IMG.beachGroup, alt: "Group practice by the sea", span: "" },
  { src: IMG.village, alt: "Coastal village", span: "" },
  { src: IMG.swim, alt: "Sea swimming", span: "" },
  { src: IMG.cliff, alt: "Cliffs and sea", span: "md:col-span-2" },
  { src: IMG.flowers, alt: "Mediterranean flowers", span: "" },
  { src: IMG.sunrise, alt: "Mountain sunrise", span: "" },
];

function SunMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-[0.85em] w-[0.85em] rounded-full bg-gradient-to-br from-[#f0c27a] via-[#e8a84a] to-[#c47a2a] shadow-[0_0_24px_rgba(232,168,74,0.45)] ${className}`}
    />
  );
}

function CtaButton({
  children,
  href,
  variant = "solid",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "ghost" | "light";
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] transition duration-300";
  const styles =
    variant === "solid"
      ? "bg-[#1a4540] text-[#faf6f0] hover:bg-[#123530]"
      : variant === "light"
        ? "bg-[#faf6f0] text-[#1a4540] hover:bg-white"
        : "border border-current/30 hover:border-current hover:bg-[#1a4540]/5";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function ZozanHome() {
  return (
    <div className="zozan-site min-h-screen scroll-smooth bg-[#faf6f0] text-[#1c1a17]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1a4540]/8 bg-[#faf6f0]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <SunMark />
            <span className="font-[family-name:var(--font-zo-display)] text-[22px] font-medium tracking-[0.04em] text-[#1a4540]">
              Zozan
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-[#1a4540]/80 md:flex">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="transition hover:text-[#1a4540]">
                {n.label}
              </a>
            ))}
          </nav>
          <CtaButton href="#book">Book</CtaButton>
        </div>
      </header>

      <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt="Woman in a yoga pose outdoors"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f1c]/85 via-[#0c1f1c]/30 to-[#0c1f1c]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1f1c]/55 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[#faf6f0]/80">
            <SunMark className="!h-2.5 !w-2.5 shadow-none" />
            Kalkan · Mediterranean · Online
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-zo-display)] text-[clamp(3rem,9vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-[#faf6f0]">
            Yoga with
            <br />
            <span className="italic text-[#f0c27a]">sun in it.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[#faf6f0]/85 md:text-[18px]">
            Private sessions, group classes, and online practice with Zozan Güneş. Adaptive yoga for every body, based in Kalkan on the Turkish coast.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="#book" variant="light">
              Book a session
            </CtaButton>
            <a
              href="#offerings"
              className="inline-flex items-center justify-center border border-[#faf6f0]/40 px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-[#faf6f0] transition hover:bg-[#faf6f0]/10"
            >
              See offerings
            </a>
          </div>
        </div>
      </section>

      <section id="practice" className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
        <div className="relative md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden shadow-[0_30px_80px_rgba(26,69,64,0.12)]">
            <Image
              src={IMG.intro}
              alt="Yoga practice"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 40vw"
              quality={90}
            />
          </div>
          <p className="mt-4 font-[family-name:var(--font-zo-display)] text-sm italic text-[#1a4540]/70">
            @zozangg · Kalkan
          </p>
        </div>
        <div className="md:col-span-7 md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#c47a2a]">Meet your teacher</p>
          <h2 className="mt-4 font-[family-name:var(--font-zo-display)] text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] text-[#1a4540]">
            Hi, I&apos;m <span className="italic">Zozan</span>
          </h2>
          <p className="mt-3 font-[family-name:var(--font-zo-display)] text-xl italic text-[#c47a2a] md:text-2xl">
            Teacher, researcher, and local in Kalkan
          </p>
          <div className="mt-8 space-y-5 text-[16px] leading-[1.8] text-[#3a3630]">
            <p>
              I teach yoga in Kalkan and online. Classes stay warm and unhurried: clear alignment, steady breath, and room to actually enjoy the practice.
            </p>
            <p>
              Sessions work for different bodies and experience levels. Private work for focus, groups for energy, prenatal support through pregnancy, partner classes for trust and play, and kids yoga that keeps movement fun.
            </p>
            <p>
              I also co-authored research on yoga and sustainable consumer behaviour. Practice is how we move. It is also how we live.
            </p>
          </div>
          <blockquote className="mt-10 border-l-2 border-[#f0c27a] pl-6">
            <p className="font-[family-name:var(--font-zo-display)] text-[clamp(1.25rem,2.5vw,1.65rem)] italic leading-snug text-[#1a4540]">
              &ldquo;Soften your body. Settle your mind. Find a practice that fits you.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1a4540] px-5 py-16 text-center md:py-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f0c27a]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-[#f0c27a]/15 blur-3xl" />
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#f0c27a]/90">A practice that leaves you</p>
        <div className="mx-auto mt-6 max-w-4xl font-[family-name:var(--font-zo-display)] text-[clamp(1.5rem,4vw,2.75rem)] font-medium tracking-[0.08em] text-[#faf6f0]">
          <p className="mb-2">STRONGER · SOFTER · LIGHTER</p>
          <p className="mb-2 text-[#f0c27a]">GROUNDED · PLAYFUL · PRESENT</p>
          <p className="tracking-[0.28em]">S · U · N · L · I · T</p>
        </div>
      </section>

      <section id="offerings" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c47a2a]">Ways to practice</p>
            <h2 className="mt-4 font-[family-name:var(--font-zo-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-medium text-[#1a4540]">
              Choose what fits your week
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#3a3630]/85">
              Six formats in Kalkan and online. Message to book a spot.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <article
                key={o.title}
                className="group flex flex-col overflow-hidden border border-[#1a4540]/10 bg-white/50 transition duration-300 hover:-translate-y-1 hover:border-[#1a4540]/25 hover:shadow-[0_24px_60px_rgba(26,69,64,0.1)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width:768px) 100vw, 33vw"
                    quality={90}
                  />
                  <span className="absolute left-4 top-4 bg-[#faf6f0]/95 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#1a4540] backdrop-blur-sm">
                    {o.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-zo-display)] text-[22px] font-medium text-[#1a4540]">
                    {o.title}
                  </h3>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-[#c47a2a]">{o.subtitle}</p>
                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-[#3a3630]/90">{o.body}</p>
                  <a
                    href="#book"
                    className="mt-6 inline-flex text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a4540] underline-offset-4 transition hover:underline"
                  >
                    Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kalkan" className="bg-[#1a4540] text-[#faf6f0]">
        <div className="mx-auto grid max-w-[1280px] items-stretch md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[560px]">
            <Image
              src={IMG.coast}
              alt="Mediterranean coast near Kalkan"
              fill
              className="object-cover"
              sizes="50vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a4540]/40 to-transparent md:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-20">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#f0c27a]">Location</p>
            <h2 className="mt-4 font-[family-name:var(--font-zo-display)] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-tight">
              Teaching from
              <br />
              <span className="italic text-[#f0c27a]">Kalkan</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-[#faf6f0]/80">
              Small harbour town on Turkey&apos;s Turquoise Coast. White houses, long summers, and nearly 300 days of sun a year. We practice in studios, on hotel lawns, and wherever the light is good.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-[#faf6f0]/85">
              <li className="flex gap-3">
                <span className="text-[#f0c27a]">✦</span>
                Studio Arch Pilates: group and intro classes
              </li>
              <li className="flex gap-3">
                <span className="text-[#f0c27a]">✦</span>
                Payava Otel: kids yoga Sundays at 13:00
              </li>
              <li className="flex gap-3">
                <span className="text-[#f0c27a]">✦</span>
                Patara Clubhouse: partner yoga and specials
              </li>
              <li className="flex gap-3">
                <span className="text-[#f0c27a]">✦</span>
                Private sessions and online worldwide
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#c47a2a]">Around the mat</p>
              <h2 className="mt-3 font-[family-name:var(--font-zo-display)] text-[clamp(2rem,4vw,3.25rem)] font-medium text-[#1a4540]">
                Life on the coast
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-[#3a3630]/80">
              Cliffs, salt water, slow mornings, and the quiet after class.
            </p>
          </div>
          <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
            {gallery.map((g) => (
              <div key={g.src + g.alt} className={`relative overflow-hidden ${g.span || ""}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                  quality={88}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#1a4540]/10 bg-white/50 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c47a2a]">Philosophy</p>
            <h2 className="mt-4 font-[family-name:var(--font-zo-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-tight text-[#1a4540]">
              What stays after class ends
            </h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-[#3a3630]">
              I want practice that is free and precise at the same time. Private sessions follow your body. Groups stay welcoming. Kids get to be kids. Partners get to laugh.
            </p>
            <p className="mt-4 text-[16px] leading-[1.85] text-[#3a3630]">
              The longer people practice yoga, the more their daily choices tend to shift. That idea sits at the center of the research I co-authored on sustainable consumer behaviour among yoga practitioners.
            </p>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden">
              <Image
                src={IMG.sunrise}
                alt="Coastal mountains at sunrise"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 40vw"
                quality={90}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center border border-[#1a4540]/12 bg-[#faf6f0] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#c47a2a]">Published research</p>
            <h3 className="mt-4 font-[family-name:var(--font-zo-display)] text-xl font-medium leading-snug text-[#1a4540] md:text-2xl">
              Do Yoga Be Sustainable
            </h3>
            <p className="mt-2 text-[13px] text-[#3a3630]/75">
              Examination of sustainable consumer behaviour of yoga practitioners
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-[#3a3630]">
              Co-authored with Arif Yüce. International Journal of Marketing, Communication and New Media, 2021.
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-[#3a3630]/80">
              Based on 307 yoga practitioners: more experience with yoga tracked with stronger sustainable consumption habits.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-[#1a4540]/10">
              <Image src={IMG.mat} alt="Yoga mat and practice space" fill className="object-cover" sizes="40vw" quality={90} />
            </div>
            <p className="mt-8 font-[family-name:var(--font-zo-display)] text-lg italic text-[#1a4540]">
              See you on the mat,
              <br />
              Zozan
            </p>
          </div>
        </div>
      </section>

      <section id="book" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0">
          <Image src={IMG.bookBg} alt="" fill className="object-cover opacity-25" sizes="100vw" quality={80} />
          <div className="absolute inset-0 bg-[#faf6f0]/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-[640px] text-center">
          <SunMark className="mx-auto !h-4 !w-4" />
          <h2 className="mt-6 font-[family-name:var(--font-zo-display)] text-[clamp(2rem,5vw,3.5rem)] font-medium text-[#1a4540]">
            Book a session
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#3a3630]">
            Teaching from Kalkan: private, group, and online. Call or message to find a time.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/905456265213"
              className="inline-flex min-w-[200px] items-center justify-center bg-[#1a4540] px-8 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#faf6f0] transition hover:bg-[#123530]"
            >
              WhatsApp
            </a>
            <a
              href="tel:+905456265213"
              className="inline-flex min-w-[200px] items-center justify-center border border-[#1a4540]/30 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#1a4540] transition hover:border-[#1a4540]"
            >
              +90 545 626 52 13
            </a>
          </div>
          <a
            href="https://www.instagram.com/zozangg/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-[12px] uppercase tracking-[0.2em] text-[#c47a2a] underline-offset-4 hover:underline"
          >
            @zozangg on Instagram
          </a>

          <form className="mt-14 space-y-4 text-left" action="#">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-[11px] uppercase tracking-[0.12em] text-[#1a4540]/70">
                Name
                <input name="name" required className="mt-2 w-full border border-[#1a4540]/20 bg-white/80 px-3 py-3 text-[14px] outline-none focus:border-[#1a4540]" />
              </label>
              <label className="block text-[11px] uppercase tracking-[0.12em] text-[#1a4540]/70">
                Email
                <input type="email" name="email" required className="mt-2 w-full border border-[#1a4540]/20 bg-white/80 px-3 py-3 text-[14px] outline-none focus:border-[#1a4540]" />
              </label>
            </div>
            <label className="block text-[11px] uppercase tracking-[0.12em] text-[#1a4540]/70">
              I&apos;m interested in
              <select name="interest" className="mt-2 w-full border border-[#1a4540]/20 bg-white/80 px-3 py-3 text-[14px] outline-none focus:border-[#1a4540]">
                <option>Private session</option>
                <option>Group class</option>
                <option>Prenatal</option>
                <option>Partner yoga</option>
                <option>Kids yoga</option>
                <option>Online</option>
              </select>
            </label>
            <label className="block text-[11px] uppercase tracking-[0.12em] text-[#1a4540]/70">
              Message
              <textarea name="message" rows={4} className="mt-2 w-full resize-y border border-[#1a4540]/20 bg-white/80 px-3 py-3 text-[14px] outline-none focus:border-[#1a4540]" />
            </label>
            <div className="pt-2 text-center">
              <button type="submit" className="bg-[#c47a2a] px-10 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#a86520]">
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#1a4540]/10 bg-[#1a4540] px-5 py-12 text-[#faf6f0] md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <SunMark className="!h-3 !w-3" />
              <span className="font-[family-name:var(--font-zo-display)] text-xl tracking-wide">Zozan Yoga</span>
            </div>
            <p className="mt-3 max-w-xs text-[13px] text-[#faf6f0]/65">
              Yoga in Kalkan and online. Private, group, prenatal, partner, and kids classes.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[#faf6f0]/70">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-[#f0c27a]">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="text-center text-[12px] text-[#faf6f0]/55 md:text-right">
            <a href="tel:+905456265213" className="block hover:text-[#f0c27a]">
              +90 545 626 52 13
            </a>
            <a href="https://www.instagram.com/zozangg/" className="mt-1 block hover:text-[#f0c27a]" target="_blank" rel="noopener noreferrer">
              @zozangg
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1280px] border-t border-[#faf6f0]/10 pt-6 text-center text-[11px] text-[#faf6f0]/40">
          <Link href="/" className="underline-offset-2 hover:text-[#f0c27a] hover:underline">
            All sites
          </Link>
        </div>
      </footer>
    </div>
  );
}
