import MainNavBar from "@/components/header/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins  } from 'next/font/google'
 
const roboto = Poppins ({
  weight: '300',
  subsets: ['latin'],
})

import "instantsearch.css/themes/satellite-min.css";
import Footer from "@/components/footer/Footer";
// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Buy premium cycles, smartwatches, hi-fi systems, headphones and cameras ",
  description: "Findbetter is a marketplace for Cycling, Photography , Headphones, Hifi home theaters & more. A trusted shopping platform with verified sellers. Buy and sell premium stuff.",
  applicationName: "Find Better",
  keywords: ['Preowned Cycles', 'Used Cycles', 'Used Cameras', 'Hifi home theater headphones', 'Premium Cycles', 'Mountain Bikes', 'Road Bikes', 'AV Receiver', 'Nikon Camera', 'Cannon', 'Garmin', 'Carbon wheel', 'Carbon handlebar', 'Vinyl record', 'LP record', 'Trek Cycles', 'Marlin Bikes', 'Giant Bikes', 'Polygon Bikes', 'Cannondale Bikes'],
  
  alternates: {
    canonical: 'https://findbetter.ai/marketplace',
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: 'Buy premium cycles, smartwatches, hi-fi systems, headphones and cameras ',
    description: "Findbetter is a marketplace for Cycling, Photography , Headphones, Hifi home theaters & more. A trusted shopping platform with verified sellers. Buy and sell premium stuff.",
    url: 'https://findbetter.ai/marketplace',
    siteName: "Find Better",
    images: 'https://www.findbetter.ai/wp-content/uploads/2022/05/cropped-Asset-9-192x192.png',
    locale: "en_US",
    type: "website",
  },

  appLinks: {
    ios: {
      url: "https://nextjs.org/ios",
      app_store_id: "id1625039512",
    },
    android: {
      package: "https://play.google.com/store/apps/details?id=ai.findbetter.fbapp",
      app_name: "Findbetter",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        {/* <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
    rel="stylesheet"
  /> */}
      <body 
      // style={{fontFamily: 'Dancing Script'}} 
      className={roboto.className}
      
      >
        <MainNavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
