import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from './providers/ThemeProvider';
import { HeaderVisibilityProvider } from "./providers/HeaderVisibilityContext";
import LayoutShell from "@/components/layout/layoutShell";


const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Noted",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} scrollbar-hide`}>

      <body className="overflow-hidden">
        <ThemeProvider>
          <HeaderVisibilityProvider>
            <LayoutShell>
              {children}
            </LayoutShell>
          </HeaderVisibilityProvider>
        </ThemeProvider>
      </body>

    </html >
  );
}
