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
  themeColor: "#0b0a09",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brunobarroso.adv.br"),
  title:
    "Bruno Barroso — Advocacia e Assessoria Jurídica | Previdenciário, Empresarial, Imobiliário e Cível · Turmalina - MG",
  description:
    "Dr. Bruno Barroso — Advocacia e Assessoria Jurídica. +14 anos de tradição, ética e compromisso. Especialistas em Direito Previdenciário (Aposentadorias do INSS), Direito Imobiliário, Cível, Sucessões e Assessoria Jurídica Empresarial. Nota Máxima 5,0 ★ com mais de 55 avaliações no Google em Turmalina - MG. Atendimento presencial e digital para todo o Brasil.",
  keywords: [
    "Bruno Barroso Advocacia",
    "Dr. Bruno Barroso",
    "Bruno Barroso Advogado",
    "Advocacia e Assessoria Jurídica Bruno Barroso",
    "Advogado Turmalina MG",
    "Advocacia Turmalina",
    "Advogado Previdenciário Turmalina",
    "Aposentadoria INSS Turmalina",
    "Benefícios Previdenciários Turmalina MG",
    "Assessoria Jurídica Empresarial Turmalina",
    "Direito Imobiliário Turmalina",
    "Usucapião Turmalina MG",
    "Inventário e Sucessões Turmalina",
    "Advogado Vale do Jequitinhonha",
    "Advogado Minas Gerais",
  ],
  authors: [{ name: "Bruno Barroso — Advocacia e Assessoria Jurídica" }],
  creator: "Bruno Barroso — Advocacia e Assessoria Jurídica",
  publisher: "Bruno Barroso — Advocacia e Assessoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=bruno3", sizes: "any" },
      { url: "/icon-32x32.png?v=bruno3", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=bruno3", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=bruno3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=bruno3",
    apple: [{ url: "/apple-icon.png?v=bruno3", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.brunobarroso.adv.br",
    title:
      "Bruno Barroso — Advocacia e Assessoria Jurídica | Turmalina - MG",
    description:
      "Justiça com ética, clareza e compromisso. +14 anos de advocacia combativa e resolutiva. Nota 5,0 ★ com 55 avaliações reais no Google em Turmalina - MG.",
    siteName: "Bruno Barroso — Advocacia e Assessoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 956,
        height: 520,
        alt: "Bruno Barroso Advocacia e Assessoria Jurídica - Logotipo Oficial",
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
    name: "Bruno Barroso — Advocacia e Assessoria Jurídica",
    alternateName: "Bruno Barroso Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dr. Bruno Barroso",
        jobTitle: "Advogado Fundador · Especialista em Direito Previdenciário, Cível, Imobiliário e Empresarial",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Dra. Jennifer Karin",
        jobTitle: "Advogada Associada",
      },
    ],
    telephone: "+55-38-99265-0181",
    url: "https://www.brunobarroso.adv.br",
    image: "https://www.brunobarroso.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Lauro Machado, 390 - Centro",
      addressLocality: "Turmalina",
      addressRegion: "MG",
      postalCode: "39660-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "55",
    },
    areaServed: [
      "Turmalina",
      "Minas Novas",
      "Capelinha",
      "Carbonita",
      "Veredinha",
      "Vale do Jequitinhonha",
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
      "https://wa.me/5538992650181",
      "https://www.instagram.com/brunobarrosoadvocacia/",
      "https://www.google.com/search?q=Bruno+Barroso+%E2%80%94+Advocacia+e+Assessoria+Jur%C3%ADdica%0ATurmalina+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=bruno3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=bruno3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=bruno3" />
        <link rel="shortcut icon" href="/icon-32x32.png?v=bruno3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=bruno3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0b0a09] font-sans text-[#ede5dc] antialiased selection:bg-[#d4a843] selection:text-[#0b0a09]">
        {children}
      </body>
    </html>
  );
}
