import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { AlignFlowHome } from "@/components/align-flow/AlignFlowHome";

const afDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-af-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Align and Flow",
  description:
    "A yoga & meditation collective that's passionate about helping you stay grounded on the go.",
};

export default function AlignFlowPage() {
  return (
    <div className={`${afDisplay.variable} font-sans antialiased`}>
      <AlignFlowHome />
    </div>
  );
}
