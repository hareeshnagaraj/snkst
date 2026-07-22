import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

const IMG = {
  hero: asset("/images/ludobolcato/img-058a01b650ca.webp"),
  logo: asset("/images/ludobolcato/img-80706d373b38.webp"),
  moon: asset("/images/ludobolcato/img-8b8c1c774f8d.webp"),
  intro: asset("/images/ludobolcato/img-49046e3cf31a.webp"),
  quote: asset("/images/ludobolcato/img-bf125a61a916.webp"),
  leaves: asset("/images/ludobolcato/img-afd77fa921e3.webp"),
  aboutTree: asset("/images/ludobolcato/img-043c87bb1bf0.webp"),
  aboutCity: asset("/images/ludobolcato/img-d4a793d4609c.webp"),
  blog1: asset("/images/ludobolcato/img-3eb807b4fe8b.webp"),
  blog2: asset("/images/ludobolcato/img-2fc0ee04a75c.webp"),
  blog3: asset("/images/ludobolcato/img-0cfeeb181057.webp"),
} as const;

const nav = [
  { label: "HOME", href: "#top" },
  { label: "ABOUT", href: "#about" },
  { label: "CLASSES", href: "#classes" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

const classes = [
  {
    title: "HATHA YOGA",
    body: "Hatha Yoga connects the body and mind through the practice of asanas (physical postures) and pranayama (breathing exercises). Focus and attention will be on the precise alignment of the body to achieve balance both mentally and physically.",
  },
  {
    title: "DYNAMIC YOGA FLOW",
    body: "This class will challenge and energise your body through a sequence of fast-flowing transitions designed to enhance strength and flexibility. You will leave the class sweaty, but super zen and uplifted.",
  },
  {
    title: "STRETCHY FLOW",
    body: "This slow and nourishing flow will stretch away the tensions accumulated in the body (and the mind). Each move will be held for longer, incorporating relaxing breathing techniques. Give yourself permission to slow down, melt the stress away while increasing your flexibility and recharging your mind.",
  },
];

const testimonials = [
  {
    quote:
      "Ludo is one of the most wonderful souls I've ever met and her classes are amazing! You can be either a newbie like me or an experienced one, Ludo will be there for you every step of the way. Definitely something you don't want to miss out!",
    name: "FLO",
  },
  {
    quote:
      "Ludo is the kind of teacher that will put you in the right mood straight away! She's constantly laughing and smiling and will make you feel at ease independently of your yoga level. Thank you Ludo for making me fall back in love with Yoga!",
    name: "INES",
  },
  {
    quote:
      "Before I met Ludo, I have tried a few other yoga practices. I did not find them enjoyable. I could not focus and connect with myself. Then Ludo and our first yoga together happened. I love her amazing energy, yet calm and balanced voice while she is leading me to find my inner peace and strength in my body. Her online classes are just what I need after a busy day, to ground myself, reconnect, and take care of my physical body. My mind and muscles are so grateful. And do not be surprised if Yoga with Ludo becomes the start of a great friendship.",
    name: "ANJA",
  },
  {
    quote:
      "Ludo's energy and enthusiasm for yoga is what led me on this journey today. If you have her at your side you will feel relaxed, protected and motivated during any practice. Her smile and her caring for others will capture you right from the start.",
    name: "GIADA",
  },
  {
    quote:
      "Ludo is intuitive, present and a free spirit. She makes you feel grounded in your yoga practice, like there is nothing more important that focusing on the here and now. Being a beginner in yoga, Ludo supports you, and can see your potential and to show you what you are capable of.",
    name: "ELLE",
  },
];

const blog = [
  { title: "SO NOW YOU'RE A BLOGGER?", image: IMG.blog1 },
  { title: "COMING SOON!", image: IMG.blog2 },
  { title: "COMING SOON!", image: IMG.blog3 },
];

function LudoButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-[#edb0b0] px-9 py-4 text-[13px] font-normal uppercase tracking-[0.12em] text-white transition hover:bg-[#e49a9a] ${className}`}
    >
      {children}
    </span>
  );
}

export function LudoBolcatoHome() {
  return (
    <div id="top" className="ludo-site min-h-screen bg-white text-[#0b0a0a]">
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src={IMG.hero}
          alt="Ludo Bolcato in a side angle yoga pose"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />

        <header className="relative z-20">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-6 text-[11px] uppercase tracking-[0.28em] text-[#1a1a1a] md:gap-x-10 md:text-[12px]">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:opacity-60">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 flex min-h-[calc(100svh-80px)] flex-col items-center justify-center px-4 pb-24 text-center">
          <div className="mb-10 flex items-center gap-3 md:gap-5">
            <span className="font-[family-name:var(--font-ludo-sans)] text-[clamp(1.75rem,6vw,3.5rem)] font-light tracking-[0.35em] text-[#1a1a1a]">
              LUDO
            </span>
            <Image src={IMG.moon} alt="" width={48} height={48} className="h-8 w-8 md:h-12 md:w-12" />
            <span className="font-[family-name:var(--font-ludo-sans)] text-[clamp(1.75rem,6vw,3.5rem)] font-light tracking-[0.35em] text-[#1a1a1a]">
              BOLCATO
            </span>
          </div>
          <a href="#book">
            <LudoButton>Book a class</LudoButton>
          </a>
        </div>
      </section>

      {/* Intro */}
      <section id="introduction" className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
          <Image src={IMG.intro} alt="Ludo smiling in yoga attire" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-[family-name:var(--font-ludo-display)] text-[clamp(2.5rem,5vw,3.5rem)] font-normal italic leading-none text-[#001a16]">
            Hi, I&apos;m Ludo
          </h1>
          <h2 className="mt-4 font-[family-name:var(--font-ludo-display)] text-[clamp(1.25rem,2.5vw,1.7rem)] italic text-[#ac2a37]">
            Welcome to this healing space
          </h2>
          <p className="mt-8 text-[15px] leading-[1.85] text-[#333]">
            I&apos;m a yoga teacher with an incredible passion for the way our bodies move. My classes are designed to achieve strength and flexibility, both in the body and in the mind, combining harmonious movements with specific breathing techniques. I always teach my students to bring a sense of joy and playfulness during the practice, accepting and nourishing our strong, incredible bodies.
          </p>
        </div>
      </section>

      {/* Quote + image */}
      <section className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 pb-20 md:grid-cols-2 md:px-10 md:pb-28">
        <div className="order-2 text-center md:order-1 md:text-left">
          <h2 className="font-[family-name:var(--font-ludo-sans)] text-[clamp(1.1rem,2.5vw,1.75rem)] font-medium uppercase leading-snug tracking-[0.04em] text-[#00473e]">
            &ldquo;Be where you are, not where you think you should be.&rdquo;
          </h2>
          <p className="mt-8 text-[15px] leading-[1.85] text-[#333]">
            My purpose is to connect with you and help you find more balance in this beautifully chaotic and fast-paced life.
          </p>
          <p className="mt-6 text-[15px] leading-[1.85] text-[#333]">
            Through the practice of yoga, I will help you become a better version of yourself (both on and off the mat), empowering you with the tools to adopt a more holistic approach to life and to shine your light bright in the world.
          </p>
        </div>
        <div className="relative order-1 mx-auto aspect-square w-full max-w-md overflow-hidden md:order-2">
          <Image src={IMG.quote} alt="Soft abstract light" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
        </div>
      </section>

      {/* Classes */}
      <section
        id="classes"
        className="relative px-6 py-20 md:px-10 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.92)), url(${IMG.leaves})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-14 text-center font-[family-name:var(--font-ludo-sans)] text-[clamp(2rem,4vw,3.25rem)] font-light uppercase tracking-[0.2em] text-[#262626]">
            Classes
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {classes.map((c) => (
              <article
                key={c.title}
                className="flex flex-col border border-black/15 bg-white/80 px-7 py-10 text-center backdrop-blur-sm"
              >
                <h3 className="font-[family-name:var(--font-ludo-sans)] text-[15px] font-medium tracking-[0.12em] text-[#262626]">
                  {c.title}
                </h3>
                <p className="mt-6 flex-1 text-[14px] leading-[1.75] text-[#444]">{c.body}</p>
                <div className="mt-10">
                  <a href="#book">
                    <LudoButton>Book a class</LudoButton>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-[1100px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
            <Image src={IMG.aboutTree} alt="Ludo sitting in a tree" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-[family-name:var(--font-ludo-sans)] text-[clamp(2rem,4vw,3.25rem)] font-light uppercase tracking-[0.2em] text-[#001a16]">
              About
            </h2>
            <p className="mt-8 text-[15px] leading-[1.85] text-[#333]">
              I came to yoga as a way to challenge my then awful flexibility and quiet my restless mind and was instantly struck by the healing powers of this discipline. I was extremely fascinated by the beautiful postures some of my fellow yogis achieved and dreamt of being able to perform some of those magic tricks myself in the future. I slowly came to realise that the real magic of yoga wasn&apos;t the ability (or in my case inability) to do some advanced asanas, but rather the process of enjoying and being present in the &ldquo;here and now&rdquo;.
            </p>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="text-[15px] leading-[1.85] text-[#333]">
              My mission is to guide people in their journey, emphasising the fact that you don&apos;t have to be super flexible or perfect to do yoga – with some small, positive changes you&apos;ll be able to live a more mindful and present life.
            </p>
            <p className="mt-6 text-[15px] leading-[1.85] text-[#333]">
              As an ex-competitive swimmer and run lover, I&apos;ve always been passionate about movement. Now as a yoga teacher (and movement addict) I have a deeper knowledge of my own body, which in turn enables me to teach classes where a correct body posture and alignment play a significant role. On this platform I&apos;d like to share with you what I&apos;ve learnt so far so that we can grow stronger together.
            </p>
            <p className="mt-10 font-[family-name:var(--font-ludo-display)] text-[clamp(1.5rem,3vw,2rem)] italic text-[#ac2a37]">
              Lots of love,
              <br />
              Ludo x
            </p>
          </div>
          <div className="relative order-1 mx-auto aspect-[3/4] w-full max-w-md overflow-hidden md:order-2">
            <Image src={IMG.aboutCity} alt="Ludo outdoors near modern architecture" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-[#f8e9d3]/40 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-12 text-center text-[12px] uppercase tracking-[0.3em] text-[#666]">
            Testimonials
          </p>
          <div className="space-y-14">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="text-center">
                <p className="text-[15px] leading-[1.9] text-[#333]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5 text-[12px] font-medium uppercase tracking-[0.25em] text-[#00473e]">
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="mx-auto max-w-[1100px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div className="grid gap-6 sm:grid-cols-3">
            {blog.map((post, i) => (
              <article key={`${post.title}-${i}`} className="group">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-neutral-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-center text-[12px] uppercase tracking-[0.12em] text-[#333]">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
          <h2 className="text-center font-[family-name:var(--font-ludo-sans)] text-[clamp(2.5rem,6vw,4.5rem)] font-light uppercase tracking-[0.12em] text-[#001a16] md:text-right">
            Blog
          </h2>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/5 bg-[#faf8f5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="font-[family-name:var(--font-ludo-sans)] text-[clamp(1.75rem,4vw,3rem)] font-light uppercase tracking-[0.18em] text-[#292929]">
            Get in touch
          </h2>
          <p className="mt-4 text-[15px] text-[#555]">I would love to hear from you!</p>
          <a
            href="mailto:ludobolcatoyoga@gmail.com"
            className="mt-3 inline-block text-[15px] font-medium text-[#00473e] underline-offset-4 hover:underline"
          >
            ludobolcatoyoga@gmail.com
          </a>

          <form id="book" className="mt-12 space-y-5 text-left" action="#">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[12px] uppercase tracking-[0.08em] text-[#666]">
                First Name
                <input
                  required
                  name="firstName"
                  className="mt-2 w-full border border-black/20 bg-white px-3 py-3 text-[14px] outline-none focus:border-[#edb0b0]"
                />
              </label>
              <label className="block text-[12px] uppercase tracking-[0.08em] text-[#666]">
                Last Name
                <input
                  required
                  name="lastName"
                  className="mt-2 w-full border border-black/20 bg-white px-3 py-3 text-[14px] outline-none focus:border-[#edb0b0]"
                />
              </label>
            </div>
            <label className="block text-[12px] uppercase tracking-[0.08em] text-[#666]">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full border border-black/20 bg-white px-3 py-3 text-[14px] outline-none focus:border-[#edb0b0]"
              />
            </label>
            <label className="block text-[12px] uppercase tracking-[0.08em] text-[#666]">
              Subject
              <input
                required
                name="subject"
                className="mt-2 w-full border border-black/20 bg-white px-3 py-3 text-[14px] outline-none focus:border-[#edb0b0]"
              />
            </label>
            <label className="block text-[12px] uppercase tracking-[0.08em] text-[#666]">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y border border-black/20 bg-white px-3 py-3 text-[14px] outline-none focus:border-[#edb0b0]"
              />
            </label>
            <div className="pt-2 text-center">
              <button type="submit" className="bg-[#edb0b0] px-10 py-4 text-[13px] uppercase tracking-[0.12em] text-white transition hover:bg-[#e49a9a]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8e9d3] px-6 py-12 text-center md:px-10">
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[#333]">
          {nav.map((item, i) => (
            <span key={item.label} className="inline-flex items-center gap-3">
              {i > 0 && <span className="text-black/30">|</span>}
              <a href={item.href} className="hover:opacity-60">
                {item.label === "HOME" ? "HOME" : item.label}
              </a>
            </span>
          ))}
        </nav>
        <div className="mt-8">
          <a href="#book">
            <LudoButton>Book a class</LudoButton>
          </a>
        </div>
        <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-black/40">
          Designed by Visuable · Clone demo
        </p>
        <div className="mt-4">
          <Link href="/" className="text-sm text-black/50 underline-offset-2 hover:underline">
            ← All clones
          </Link>
        </div>
      </footer>
    </div>
  );
}
