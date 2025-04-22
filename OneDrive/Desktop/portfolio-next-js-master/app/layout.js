import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { DATA } from "@/data/resume";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/themeprovider";

const fontSans = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: "%s | " + DATA.name,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name}`,
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${inter.variable} min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
