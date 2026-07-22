import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

const IMG = {
  heroA: asset("/images/alignflow/img-2557ddc2a793.webp"),
  heroB: asset("/images/alignflow/img-1fb06a79eea9.webp"),
  practice: asset("/images/alignflow/img-31b3ce9a6609.webp"),
  teacher: asset("/images/alignflow/img-95c2f3a1f04f.webp"),
  planStairs: asset("/images/alignflow/img-37771e8ec8d8.webp"),
  planMeditate: asset("/images/alignflow/img-b59a3fbe567d.webp"),
  planMarble: asset("/images/alignflow/img-453875bfc92e.webp"),
  classBowls: asset("/images/alignflow/img-d9f1ef64bfc1.webp"),
  classOutdoor: asset("/images/alignflow/img-d7206ee7f34a.webp"),
  classGif: asset("/images/alignflow/img-35736be3547d.gif"),
  journal1: asset("/images/alignflow/img-fcac65ece1ed.webp"),
  journal2: asset("/images/alignflow/img-29a9a206d319.webp"),
  journal3: asset("/images/alignflow/img-918bb01665e6.webp"),
  journal4: asset("/images/alignflow/img-b8fd97e491ee.webp"),
  cta: asset("/images/alignflow/img-1ffc2819f3da.webp"),
} as const;

const nav = [
  { label: "Classes", href: "#classes" },
  { label: "Teachers", href: "#teachers" },
  { label: "Training", href: "#plans" },
  { label: "Journal", href: "#journal" },
  { label: "Login", href: "#login" },
];

const plans = [
  {
    title: "Yoga Principles",
    image: IMG.planStairs,
    body: "Explore different styles of yoga & meditation with foundational tutorial videos for both beginners and experienced practitioners.",
    price: "Free",
  },
  {
    title: "Unlimited Yoga & Meditation",
    image: IMG.planMeditate,
    body: "Keep your options open with a full virtual library of classes, ranging from 5-minute meditations to 75-minute yoga flows.",
    price: "$15/mo",
  },
  {
    title: "200-hr Teacher Training",
    image: IMG.planMarble,
    body: "Take your practice to the next level by participating in our certified yoga teacher training program. Learn more about our approach.",
    price: "$3,500",
  },
];

const journal = [
  { title: "Sharing your practice with family", image: IMG.journal1, date: "March 2, 2020" },
  { title: "Setting up your space", image: IMG.journal2, date: "March 2, 2020" },
  { title: "The importance of getting out of our comfort zone", image: IMG.journal3, date: "March 2, 2020" },
  { title: "Poses 101: Lunge", image: IMG.journal4, date: "March 2, 2020" },
];

function AfButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-black px-[34px] py-[14px] text-[15px] font-medium tracking-[0.04em] text-white transition hover:bg-neutral-800 ${className}`}
    >
      {children}
    </span>
  );
}

export function AlignFlowHome() {
  return (
    <div className="af-site min-h-screen bg-[#eeedebea] text-black">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#eeedebea]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:px-10">
          <Link href="/align-flow" className="font-[family-name:var(--font-af-display)] text-[22px] tracking-tight md:text-[26px]">
            Align and Flow
          </Link>
          <nav className="hidden items-center gap-7 text-[15px] md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-black/80 transition hover:text-black">
                {item.label}
              </a>
            ))}
            <a href="#plans">
              <AfButton>Sign up</AfButton>
            </a>
          </nav>
          <a href="#plans" className="md:hidden">
            <AfButton className="!px-4 !py-2 text-sm">Sign up</AfButton>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-6 pb-10 pt-16 text-center md:px-10 md:pt-24">
        <h1 className="font-[family-name:var(--font-af-display)] text-[clamp(2rem,5vw,3.15rem)] leading-[1.2] tracking-tight">
          A yoga &amp; meditation collective
          <br className="hidden sm:block" /> that&apos;s passionate about helping
          <br className="hidden sm:block" /> you stay grounded on the go.
        </h1>
      </section>

      {/* Dual images */}
      <section className="mx-auto grid max-w-[1200px] gap-8 px-6 pb-20 md:grid-cols-12 md:px-10">
        <figure className="md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
            <Image src={IMG.heroA} alt="Woman performing advanced yoga pose" fill className="object-cover" sizes="(max-width:768px) 100vw, 60vw" priority />
          </div>
          <figcaption className="mt-3 text-left text-sm italic text-black/70">
            Member Arya practicing <span className="underline">Backbends with Denise</span> in her studio
          </figcaption>
        </figure>
        <figure className="md:col-span-5 md:mt-24">
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image src={IMG.heroB} alt="Close up of a man meditating" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
          </div>
          <figcaption className="mt-3 text-left text-sm italic text-black/70">
            Instructor Jordan leading <span className="underline">Morning Meditation</span> from home
          </figcaption>
        </figure>
      </section>

      {/* Practice / schedule */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="max-w-md">
          <p className="mb-3 text-sm italic text-black/60">Plan your practice</p>
          <h2 className="font-[family-name:var(--font-af-display)] text-[clamp(1.75rem,3.5vw,3.1rem)] leading-[1.15]">
            Find a flow that fits your schedule
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-black/80">
            We&apos;ve created three types of membership plans to best align with your individual practice. Whether you&apos;re looking to improve on basic yoga principles, gain unlimited access to a variety of classes, or start a teacher training program—we&apos;ve got a plan that can flex to meet your goals.
          </p>
          <a href="#plans" className="mt-8 inline-block">
            <AfButton>Explore plans</AfButton>
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 md:aspect-[3/4]">
          <Image src={IMG.practice} alt="Woman stretching on yoga mat" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </div>
      </section>

      {/* Banner words */}
      <section className="bg-[#e5d7c8] px-6 py-16 text-center md:py-20">
        <p className="mb-6 text-sm italic text-black/70">Discover a practice that makes you</p>
        <div className="font-[family-name:var(--font-af-display)] text-[clamp(1.25rem,3vw,2.25rem)] tracking-[0.12em]">
          <p className="mb-2">STRONGER&nbsp;&nbsp;CALMER&nbsp;&nbsp;LIGHTER</p>
          <p className="mb-2">BALANCED&nbsp;&nbsp;FOCUSED&nbsp;&nbsp;PATIENT</p>
          <p className="tracking-[0.35em]">S · P · A · C · I · O · U · S</p>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="relative order-2 aspect-[4/5] overflow-hidden bg-neutral-200 md:order-1">
          <Image src={IMG.teacher} alt="Man performing warrior pose outdoors" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </div>
        <div className="order-1 max-w-md md:order-2 md:justify-self-end">
          <p className="mb-3 text-sm italic text-black/60">Receive gentle guidance</p>
          <h2 className="font-[family-name:var(--font-af-display)] text-[clamp(1.75rem,3.5vw,3.1rem)] leading-[1.15]">
            With experienced teachers you can trust
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-black/80">
            Each of our registered yoga teachers have gone through certified training programs, specializing in a variety of different practices including Hatha, Vinyasa, Ashtanga, and Yin. At Align &amp; Flow, we provide guidance for all levels of practice so you can decide what feels best for your body.
          </p>
          <a href="#teachers" className="mt-8 inline-block">
            <AfButton>Meet your teachers</AfButton>
          </a>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <h2 className="mb-12 text-center font-[family-name:var(--font-af-display)] text-[clamp(1.75rem,3.5vw,3.1rem)]">
          Choose a practice plan
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.title} className="flex flex-col text-center">
              <div className="relative mb-6 aspect-square overflow-hidden bg-neutral-200">
                <Image src={plan.image} alt={plan.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <h3 className="font-[family-name:var(--font-af-display)] text-[22px] md:text-[26px]">{plan.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-black/75">{plan.body}</p>
              <p className="mt-5 font-[family-name:var(--font-af-display)] text-[22px]">{plan.price}</p>
              <div className="mt-5">
                <AfButton>Sign Up</AfButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Classes CTA */}
      <section id="classes" className="mx-auto max-w-[720px] px-6 py-16 text-center md:py-20">
        <p className="mb-3 text-sm italic text-black/60">Explore our virtual classes</p>
        <h2 className="font-[family-name:var(--font-af-display)] text-[clamp(1.75rem,3.5vw,3.1rem)] leading-[1.15]">
          With a variety of styles and formats to match your goals
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-black/80">
          Not all yoga and meditation is made the same, which is why we&apos;ve created a dynamic selection of classes and video tutorials. Whether you&apos;re looking for a full cardio flow or a relaxing meditation, we&apos;ve got the options you need to balance your practice.
        </p>
        <div className="mt-8">
          <AfButton>Explore classes</AfButton>
        </div>
      </section>

      {/* Layered class images */}
      <section className="relative mx-auto max-w-[1100px] px-6 pb-20 md:px-10">
        <div className="relative mx-auto aspect-[16/10] max-w-[900px]">
          <div className="absolute left-[8%] top-[8%] z-[1] w-[55%] overflow-hidden shadow-lg">
            <div className="relative aspect-[4/3]">
              <Image src={IMG.classBowls} alt="Woman with brass singing bowls" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div className="absolute bottom-[5%] right-[5%] z-[2] w-[48%] overflow-hidden shadow-xl">
            <div className="relative aspect-[3/4]">
              <Image src={IMG.classOutdoor} alt="Woman meditating outdoors" fill className="object-cover" sizes="40vw" />
            </div>
          </div>
          <div className="absolute bottom-[12%] left-[2%] z-[3] w-[22%] overflow-hidden shadow-md">
            <div className="relative aspect-[2/3]">
              <Image src={IMG.classGif} alt="Wheat grass in wind" fill className="object-cover" sizes="20vw" unoptimized />
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm italic text-black/70">
          Instructor Alexis leading <span className="underline">Unwind Meditation</span> from an open field in Marfa, TX
        </p>
      </section>

      {/* Journal */}
      <section id="journal" className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <h2 className="mb-12 text-center font-[family-name:var(--font-af-display)] text-[clamp(1.75rem,3.5vw,3.1rem)]">
          From the Journal
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {journal.map((post) => (
            <article key={post.title} className="group">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-neutral-200">
                <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
              <h3 className="font-[family-name:var(--font-af-display)] text-lg leading-snug underline-offset-4 group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-black/60">{post.date}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <AfButton>More posts</AfButton>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[420px] overflow-hidden bg-black text-white">
        <Image src={IMG.cta} alt="" fill className="object-cover opacity-40" sizes="100vw" />
        <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center">
          <h2 className="font-[family-name:var(--font-af-display)] text-[clamp(2rem,5vw,3.5rem)]">
            Make space for yourself
          </h2>
          <a href="#plans" className="mt-8">
            <span className="inline-flex border border-white px-8 py-3 text-[15px] tracking-[0.04em] transition hover:bg-white hover:text-black">
              Choose a plan
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-[#eeedebea] px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-af-display)] text-xl">Align &amp; Flow</p>
            <p className="mt-6 text-xs text-black/50">Clone for demonstration · Original on Squarespace</p>
          </div>
          <div className="max-w-sm">
            <p className="font-[family-name:var(--font-af-display)] text-lg">Stay in the Loop</p>
            <p className="mt-1 text-sm text-black/60">— Subscribe to our newsletter</p>
            <form className="mt-4 flex gap-2" action="#">
              <input
                type="email"
                placeholder="Email Address"
                className="min-w-0 flex-1 border border-black/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-black"
              />
              <button type="submit" className="bg-black px-4 py-2 text-sm text-white">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px]">
          <Link href="/" className="text-sm text-black/50 underline-offset-2 hover:underline">
            ← All clones
          </Link>
        </div>
      </footer>
    </div>
  );
}
