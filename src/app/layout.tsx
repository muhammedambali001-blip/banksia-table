import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banksia Table | Modern Australian Kitchen | Fitzroy Melbourne",
  description:
    "Discover Banksia Table, a modern Australian restaurant concept in Fitzroy, Melbourne. Explore our menu, dining experience and reservation options.",
  keywords: [
    "Melbourne restaurant",
    "Fitzroy restaurant",
    "Australian dining",
    "Restaurant menu",
    "Table reservations",
    "Private dining Melbourne",
    "Modern Australian kitchen",
  ],
  authors: [{ name: "Banksia Table" }],
  openGraph: {
    title: "Banksia Table | Modern Australian Kitchen | Fitzroy Melbourne",
    description:
      "Discover Banksia Table, a modern Australian restaurant concept in Fitzroy, Melbourne. Explore our menu, dining experience and reservation options.",
    siteName: "Banksia Table",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banksia Table | Modern Australian Kitchen",
    description:
      "A modern Australian restaurant concept in Fitzroy, Melbourne. Explore our menu, dining experience and reservation options.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased bg-cream text-charcoal`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Banksia Table",
              slogan: "Modern Australian Kitchen",
              servesCuisine: "Modern Australian",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fitzroy",
                addressRegion: "Victoria",
                addressCountry: "AU",
              },
              telephone: "+61 3 5550 1234",
              email: "hello@banksiatable.example",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              disclaimer:
                "Fictional restaurant concept created for website portfolio demonstration.",
            }),
          }}
        />
      </body>
    </html>
  );
}
