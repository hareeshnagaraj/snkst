import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { LudoBolcatoHome } from "@/components/ludo-bolcato/LudoBolcatoHome";

const ludoSans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ludo-sans",
  display: "swap",
});

const ludoDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-ludo-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ludo Bolcato",
  description:
    "Ludo's yoga classes are designed to achieve strength and flexibility, both in the body and in the mind.",
};

export default function LudoBolcatoPage() {
  return (
    <div className={`${ludoSans.variable} ${ludoDisplay.variable} antialiased`}>
      <LudoBolcatoHome />
    </div>
  );
}
