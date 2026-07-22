import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ZozanHome } from "@/components/zozan/ZozanHome";

const zoDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-zo-display",
  display: "swap",
});

const zoSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-zo-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zozan Yoga · Kalkan",
  description:
    "Private sessions, group classes, prenatal, partner & kids yoga with Zozan Güneş — teaching from Kalkan and online.",
};

export default function ZozanPage() {
  return (
    <div className={`${zoDisplay.variable} ${zoSans.variable} font-[family-name:var(--font-zo-sans)] antialiased`}>
      <ZozanHome />
    </div>
  );
}
