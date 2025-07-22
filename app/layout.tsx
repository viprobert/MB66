export const runtime = "edge";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "MB66",
  description: "MB66",
  openGraph: {
    title: "MB66",
    description: "MB66",
    siteName: "MB66",
    locale: "th_TH",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PEXRMWKZHN"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PEXRMWKZHN', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
