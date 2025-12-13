import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { TrackingInit } from "./components/trackingInit";
import { AmplitudeInit } from "@/components/AmplitudeInit";
import { FacebookPixelInit } from "./components/FacebookPixelInit";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
        <script
          defer
          src="https://track.ramiroamorim.com.br/script.js"
          data-website-id="619d2723-ec69-4ba5-9a28-1c7ca43dec5c"
        />

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
   


   <body className={cn("antialiased bg-black", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
         <AmplitudeInit />
          <TrackingInit />
          <FacebookPixelInit />
       

          {children}
        </ThemeProvider>

   
      </body>
    </html>
  );
}           