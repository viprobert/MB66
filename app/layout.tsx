import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const runtime = "edge";
export const metadata: Metadata = {
  title: "Ronaldinho | MB66",
  description: "MB66 เป็นเว็บพนันที่ให้บริการเกมออนไลน์ เช่น กีฬา ไก่ชน คาสิโน หวย,... โดยมี Ronaldinho ตำนานลูกหนังระดับโลกเป็นแบรนด์แอมบาสเดอร์ จุดประกายอนาคตแห่งชัยชนะไปกับเรา! รับฟรี 66K สำหรับทดลองเล่นวันนี้",
  keywords: ["Ronaldinho", "MB66", "ฟุตบอล", "ตำนาน", "บราซิล", "คาสิโนออนไลน์", "สล็อต", "บาคาร่า", "คาสิโนเชื่อถือได้"],
  openGraph: {
    title: "MB66 🎖 ลิงก์เข้าสู่ Mb66.com อย่างเป็นทางการ อัปเดต 07/2025",
    description: "MB66 เป็นเว็บพนันที่ให้บริการเกมออนไลน์ เช่น กีฬา ไก่ชน คาสิโน หวย,... โดยมี Ronaldinho ตำนานลูกหนังระดับโลกเป็นแบรนด์แอมบาสเดอร์ จุดประกายอนาคตแห่งชัยชนะไปกับเรา! รับฟรี 66K สำหรับทดลองเล่นวันนี้",
    url: "https://rdmb66.pages.dev/",
    siteName: "MB66",
    images: [
      {
        url: "https://rdmb66.pages.dev/img/banner.webp",
        width: 1200,
        height: 630,
        alt: "Ronaldinho | MB66",
      }
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://rdmb66.pages.dev/",
    title: "MB66 🎖 ลิงก์เข้าสู่ Mb66.com อย่างเป็นทางการ อัปเดต 07/2025",
    description: "MB66 เป็นเว็บพนันที่ให้บริการเกมออนไลน์ เช่น กีฬา ไก่ชน คาสิโน หวย,... โดยมี Ronaldinho ตำนานลูกหนังระดับโลกเป็นแบรนด์แอมบาสเดอร์ จุดประกายอนาคตแห่งชัยชนะไปกับเรา! รับฟรี 66K สำหรับทดลองเล่นวันนี้",
    images: { 
      url: "https://rdmb66.pages.dev/img/banner.webp",
      alt: "Ronaldinho | MB66",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rdmb66.pages.dev/', 
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;700&display=swap" rel="stylesheet" />
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
