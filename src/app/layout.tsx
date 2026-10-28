import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });

const title = "Brijesh Bhikadiya | React Native Developer";
const description =
  "React Native Developer with 3+ years of experience building scalable, high-performance iOS and Android apps.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#4338CA'/><stop offset='1' stop-color='#06B6D4'/></linearGradient></defs><rect width='64' height='64' rx='16' fill='url(#g)'/><text x='32' y='45' font-size='36' font-family='Arial' font-weight='800' fill='white' text-anchor='middle'>B</text></svg>`,
    )}`,
  },
};

export const viewport: Viewport = { themeColor: "#FAFAF8" };

const themeInit = `try{var t=localStorage.getItem('theme')==='dark'?'dark':'light';document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','light')}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
