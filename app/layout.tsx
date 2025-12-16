import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { TrackingInit } from "./components/trackingInit";
import { FacebookPixelInit } from "./components/FacebookPixelInit";
import Script from "next/script";

export const metadata: Metadata = {
  title: "O Plano Global",
  description:
    "Umas das maiores oportunidades que ja existiu de ganhar em multiplas moedas no conforto da sua casa, usando Facebook e Google!",
  icons: {
   
    icon: "/favicon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
   

        {/* Facebook Pixel - Base Script (sem init ainda) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          // Init será feito pelo FacebookPixelInit com dados hasheados`}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TV7262BX');`}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7J6X5HLBHD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7J6X5HLBHD');
          `}
        </Script>



        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1363853995230465&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
      </head>
   


   <body className={cn("antialiased bg-black font-adero")}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TV7262BX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
   
          <TrackingInit />
          <FacebookPixelInit />
         {children}
        </ThemeProvider>
 
   
      </body>
    </html>
  );
}           