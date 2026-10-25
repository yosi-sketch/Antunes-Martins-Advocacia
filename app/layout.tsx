import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071521",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antunesemartins.adv.br"),
  title:
    "Antunes & Martins Advocacia Especializada | Nanuque - MG · Cível, Criminal, Trabalho, Família e Previdenciário",
  description:
    "Antunes & Martins Advocacia Especializada. Nossa missão é buscar justiça com ética e profissionalismo. Especialistas em Direito Cível, Criminal, Trabalhista, Família e Previdenciário. Nota Máxima 5,0 ★ com 39 avaliações no Google em Nanuque - MG. Atendimento presencial e online para todo o Brasil.",
  keywords: [
    "Antunes & Martins Advocacia Especializada",
    "Antunes e Martins Advocacia",
    "Advogada em Nanuque",
    "Advocacia Nanuque MG",
    "Dra Giovana Antunes",
    "Direito Cível Nanuque",
    "Direito Criminal Nanuque",
    "Direito do Trabalho Nanuque",
    "Direito de Família Nanuque",
    "Direito Previdenciário Nanuque",
    "Aposentadoria INSS Nanuque MG",
    "Advogado Vale do Mucuri",
    "Advogado Minas Gerais",
  ],
  authors: [{ name: "Antunes & Martins Advocacia Especializada" }],
  creator: "Antunes & Martins Advocacia Especializada",
  publisher: "Antunes & Martins Advocacia Especializada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=am1", sizes: "any" },
      { url: "/icon-32x32.png?v=am1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=am1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=am1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=am1",
    apple: [{ url: "/apple-icon.png?v=am1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.antunesemartins.adv.br",
    title:
      "Antunes & Martins Advocacia Especializada | Nanuque - MG",
    description:
      "Justiça com ética e profissionalismo. Especialistas em Cível, Criminal, Trabalho, Família e Previdenciário. Nota 5,0 ★ no Google em Nanuque - MG.",
    siteName: "Antunes & Martins Advocacia Especializada",
    images: [
      {
        url: "/logo.png",
        width: 957,
        height: 303,
        alt: "Antunes & Martins Advocacia Especializada - Logotipo Oficial",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Antunes & Martins Advocacia Especializada",
    alternateName: "Antunes & Martins Advocacia",
    telephone: "+55-33-99127-4893",
    url: "https://www.antunesemartins.adv.br",
    image: "https://www.antunesemartins.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Caxambú, 230 - Centro",
      addressLocality: "Nanuque",
      addressRegion: "MG",
      postalCode: "39860-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "39",
    },
    areaServed: [
      "Nanuque",
      "Teófilo Otoni",
      "Carlos Chagas",
      "Serra dos Aimorés",
      "Mucuri",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5533991274893",
      "https://www.instagram.com/antunesemartins.advocacia/",
      "https://www.google.com/search?q=Antunes+%26+Martins+Advocacia+Especializada%0ANanuque+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=am1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=am1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=am1" />
        <link rel="shortcut icon" href="/icon-32x32.png?v=am1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=am1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#071521] font-sans text-[#edf2f7] antialiased selection:bg-[#dfb135] selection:text-[#071521]">
        {children}
      </body>
    </html>
  );
}
