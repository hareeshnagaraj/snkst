import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

const clones = [
  {
    href: "/zozan",
    title: "Zozan Yoga",
    source: "Synthesized from @zozangg · new brand site",
    blurb:
      "Mediterranean teacher brand for Kalkan — sunlit hero, adaptive offerings (private, prenatal, partner, kids), research-backed philosophy, WhatsApp booking.",
    image: asset("/images/zozan/hq-hero.jpg"),
    tone: "bg-[#1a4540]",
    featured: true,
  },
  {
    href: "/align-flow",
    title: "Align and Flow",
    source: "alignflow-fluid-demo.squarespace.com",
    blurb:
      "Minimalist yoga & meditation collective — serif typography, warm greige palette, membership plans and journal.",
    image: asset("/images/alignflow/img-2557ddc2a793.webp"),
    tone: "bg-[#eeedebea]",
    featured: false,
  },
  {
    href: "/ludo-bolcato",
    title: "Ludo Bolcato",
    source: "ludobolcato.com",
    blurb:
      "Personal yoga teacher brand — pink hero, soft coral CTAs, class cards, testimonials and contact form.",
    image: asset("/images/ludobolcato/img-058a01b650ca.webp"),
    tone: "bg-[#f8e9d3]/50",
    featured: false,
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Website lab</p>
        <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
          Clones + a synthesized brand
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Two reverse-engineered Squarespace sites, plus a new Mediterranean brand site for Zozan —
          designed from her Instagram, not cloned from an existing website.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {clones.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition hover:border-white/25 ${
                c.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative ${c.featured ? "aspect-[21/9]" : "aspect-[16/11]"} ${c.tone}`}>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes={c.featured ? "100vw" : "(max-width:768px) 100vw, 50vw"}
                />
                {c.featured && (
                  <span className="absolute left-4 top-4 bg-[#f0c27a] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#1a4540]">
                    New · synthesized
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-medium">{c.title}</h2>
                <p className="mt-1 text-xs text-neutral-500">{c.source}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{c.blurb}</p>
                <p className="mt-5 text-sm text-white/80 group-hover:underline">Open →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
