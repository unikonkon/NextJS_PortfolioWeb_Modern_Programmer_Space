import type { Metadata } from "next";
import { Exo_2, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suthep Jantawee | Full Stack Developer",
  description: "Full Stack Developer with 3+ years of experience in web development. Passionate about building intuitive interfaces and leveraging AI tools.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Bangkok"],
  authors: [{ name: "Suthep Jantawee" }],
  openGraph: {
    title: "Suthep Jantawee | Full Stack Developer",
    description: "Full Stack Developer with 3+ years of experience in web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
