"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, MotionConfig } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Award,
  Shield,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  Sparkles,
  Briefcase,
  Building2,
  FileText,
  BadgeCheck,
  FileCheck2,
  Home as HomeIcon,
  CheckCircle2,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538992650181";
const PHONE_DISPLAY = "(38) 99265-0181";
const EMAIL_CONTACT = "contato@brunobarroso.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/brunobarrosoadvocacia/";
const INSTAGRAM_HANDLE = "@brunobarrosoadvocacia";

const ADDRESS_TEXT =
  "Av. Lauro Machado, 390 - Centro, Turmalina - MG, 39660-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Bruno+Barroso+%E2%80%94+Advocacia+e+Assessoria+Jur%C3%ADdica%0ATurmalina+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/dr-bruno-barroso-2x.jpg";
const FOTO_ABOUT_SRC = "/dr-bruno-livraria.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Bruno Barroso! Gostaria de uma consultoria jurídica com o seu escritório.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  category: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Aposentadorias (INSS)",
    category: "Previdenciário · Aposentadorias · Benefícios · Revisões",
    icon: Award,
    tag: "Aposentadoria Rural & Urbana · BPC/LOAS · Auxílio-Doença · Revisão da Vida Toda",
    summary:
      "Condução técnica, atenta e rigorosa para garantir o melhor benefício no INSS, destravando aposentadorias e revertendo indeferimentos indevidos com causa ganha.",
    details:
      "A aposentadoria é a conquista de uma vida inteira de trabalho e dedicação. O escritório Bruno Barroso atua com excelência no planejamento previdenciário minucioso, concessão rápida de benefícios no INSS e recursos judiciais combativos, garantindo o valor integral a que você tem direito com total segurança.",
    topics: [
      "Planejamento previdenciário estratégico para calcular a melhor data e o maior valor de aposentadoria",
      "Aposentadoria por idade (urbana e para trabalhadores rurais de Turmalina e região)",
      "Aposentadoria por tempo de contribuição e regras de transição vigentes",
      "Aposentadoria especial para profissionais em atividades insalubres ou perigosas",
      "BPC/LOAS para idosos a partir de 65 anos e pessoas com deficiência em vulnerabilidade",
      "Auxílio por incapacidade temporária (auxílio-doença) e aposentadoria por invalidez",
      "Pensão por morte, auxílio-reclusão, salário-maternidade e restabelecimento de benefícios cancelados",
      "Ações judiciais contra o INSS para reversão de negativas e cobrança de retroativos",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Barroso! Gostaria de consultar sobre a minha aposentadoria / benefício do INSS.",
  },
  {
    id: "assessoria-empresarial",
    title: "Assessoria Jurídica Empresarial & Contratos",
    category: "Direito Empresarial · Contratos · Blindagem · Cobranças",
    icon: Building2,
    tag: "Consultoria Contínua · Prevenção de Riscos · Cobrança de Créditos · Contratos Blindados",
    summary:
      "Parceria jurídica contínua e estratégica para empresas e comércios da região operarem com total segurança jurídica, tranquilidade contratual e redução de riscos.",
    details:
      "O crescimento de um negócio exige respaldo jurídico de alto nível. Comprovado pela confiança de parceiros expressivos do setor comercial e empresarial (como a Constrular Móveis), oferecemos assessoria preventiva e contenciosa completa, blindagem contratual, mitigação de passivos trabalhistas e recuperação eficiente de créditos.",
    topics: [
      "Consultoria jurídica preventiva contínua para empresas e comércios de Turmalina e Minas Gerais",
      "Elaboração, análise e revisão criteriosa de contratos comerciais, societários e de fornecedores",
      "Cobrança extrajudicial e judicial estratégica de inadimplentes e recuperação de ativos",
      "Assessoria trabalhista preventiva e gestão de riscos em rotinas corporativas",
      "Defesa técnica em litígios cíveis, execuções judiciais e relações de consumo",
      "Adequação regulatória, estruturação de acordos comerciais e segurança patrimonial dos sócios",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Barroso! Gostaria de conversar sobre assessoria jurídica para a minha empresa.",
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário & Regularização de Imóveis",
    category: "Imobiliário · Usucapião · Escrituras · Posse Rural & Urbana",
    icon: HomeIcon,
    tag: "Usucapião Judicial & Extrajudicial · Escrituras · Regularização de Terras · RGI",
    summary:
      "Transformamos terrenos, imóveis rurais e urbanos irregulares ou com 'contratos de gaveta' em propriedades legalmente registradas e valorizadas perante o cartório.",
    details:
      "Um imóvel sem registro ou escritura definitiva coloca o patrimônio da família em risco e impede financiamentos ou vendas legais. O escritório Bruno Barroso atua com sólida experiência em usucapião, procedimentos em cartório de registro de imóveis, desmembramentos e defesas possessórias em toda a comarca de Turmalina e Vale do Jequitinhonha.",
    topics: [
      "Ações de usucapião judicial e usucapião extrajudicial célere diretamente no cartório (RGI)",
      "Regularização de escrituras públicas pendentes, contratos de compra e venda e recibos de gaveta",
      "Regularização fundiária de propriedades rurais, glebas, chácaras e terrenos urbanos",
      "Inventário e partilha de bens imóveis com averbação definitiva de transferência",
      "Elaboração e conferência de contratos de locação, compra, venda e permuta imobiliária",
      "Defesa de posse: reintegração de posse, manutenção de posse e interdito proibitório",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Barroso! Tenho uma questão imobiliária / imóvel para regularizar (usucapião / escritura).",
  },
  {
    id: "civel-familia-sucessoes",
    title: "Direito Cível Estratégico, Família & Sucessões",
    category: "Cível · Inventários · Partilhas · Divórcios · Indenizações",
    icon: Scale,
    tag: "Inventário Extrajudicial em Cartório · Partilhas · Divórcio · Danos Morais",
    summary:
      "Atuação resolutiva e acolhedora em inventários, divórcios e questões patrimoniais delicadas, garantindo clareza, proteção dos direitos e equilíbrio familiar.",
    details:
      "Momentos decisivos da vida civil e familiar demandam suporte técnico firme, comunicação transparente e respeito às relações afetivas. Conduzimos inventários ágeis em cartório e judiciais, ações de alimentos, partilhas justas e defesas cíveis com o compromisso ético que é marca registrada de Dr. Bruno Barroso e sua equipe.",
    topics: [
      "Inventários extrajudiciais em cartório: transmissão rápida de herança e economia tributária",
      "Inventários judiciais contenciosos, alvarás para liberação de contas e partilhas complexas",
      "Divórcio consensual e litigioso, partilha de patrimônio e dissolução de união estável",
      "Fixação, revisão e execução de débitos de pensão alimentícia, guarda e convivência",
      "Ações indenizatórias por perdas e danos materiais, danos morais e descumprimento contratual",
      "Execução de títulos de crédito, recuperação de quantias devidas e defesas cíveis especializadas",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Barroso! Gostaria de orientação jurídica sobre inventário, família ou questão cível.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  content: string;
  reply?: string;
  highlight?: string;
}

const clientReviews: Review[] = [
  {
    name: "Vitória Monteiro",
    badge: "Avaliação Verificada no Google · 5 Estrelas",
    date: "5 meses atrás",
    highlight: "Escritório eficiente, resolutivo e profissionalismo excepcional",
    content:
      "Escritório completamente eficiente, resolutivo e de um profissionalismo excepcional. Obtive o apoio da equipe em um momento decisivo e realmente fizeram a diferença no meu caso. Agradeço a eficiência do grupo, em especial da Dr. Karin profissional competente, inteligente e carinhosamente empática. Indico os serviços do escritório de olhos fechados!",
  },
  {
    name: "Maria Enedina Dina Antunes",
    badge: "Avaliação Verificada no Google · 5 Estrelas",
    date: "5 meses atrás",
    highlight: "Transmitiu segurança, confiança e foi ágil no atendimento",
    content:
      "Tive uma ótima experiência com o Dr. Bruno Barroso. Demonstrou muito profissionalismo, atenção e conhecimento na área jurídica. Sempre explicou cada etapa do processo de forma clara, transmitindo segurança e confiança. Além disso, foi ágil no atendimento e se mostrou comprometido com o melhor resultado possível. Recomendo seu trabalho para quem busca um advogado responsável, ético e eficiente.",
  },
  {
    name: "Constrular Móveis",
    badge: "Cliente Empresarial · Avaliação Verificada",
    date: "um ano atrás",
    highlight: "Assessoria jurídica de excelência, dedicação e confiança ímpar",
    content:
      "Sempre que precisamos de assessoria jurídica, é ao Dr. Bruno que recorremos. Um profissional ímpar, de uma competência e dedicação admiráveis, que nos atende com atenção e clareza em cada detalhe. Nossa parceria é motivo de tranquilidade e confiança. Sucesso sempre, Bruno!",
  },
  {
    name: "Deliany Batista",
    badge: "Aposentadoria Concedida · Causa Ganha",
    date: "um ano atrás",
    highlight: "Cuidou da aposentadoria do meu pai: Causa Ganha!",
    content:
      "Dr. Bruno cuidou da aposentadoria do meu pai com muita atenção e profissionalismo. Sempre prestativo e claro nas orientações, conduziu todo o processo de forma exemplar. Resultado: causa ganha! Excelente trabalho!",
  },
  {
    name: "Víctor Sousa",
    badge: "Avaliação Verificada no Google · 2 fotos",
    date: "5 meses atrás",
    highlight: "O melhor e maior escritório de advocacia da comarca de Turmalina",
    content:
      "O melhor e maior escritório de advocacia da comarca de Turmalina, atendimento humanizado e com alto grau de excelência. Super recomendo!",
  },
  {
    name: "Ivon Rodrigues",
    badge: "Avaliação Verificada no Google · 2 avaliações",
    date: "5 meses atrás",
    highlight: "Fiquei muito feliz com o resultado: 2 processos positivos pra nós!",
    content:
      "Tive a honra de me apresentar os serviços dessa equipe, e fiquei muito feliz com o resultado. 2 processos positivos pra nós. OBRIGADO",
  },
  {
    name: "Flavio Orsine",
    badge: "Avaliação Verificada no Google · 3 avaliações",
    date: "5 meses atrás",
    highlight: "Profundo conhecimento jurídico e profissionalismo impecável",
    content:
      "Equipe com profundo conhecimento jurídico e comprometimento em buscar a melhor solução. Excelente atendimento e profissionalismo impecável.",
  },
  {
    name: "Jean Kellmison de Oliveira Azevedo",
    badge: "Avaliação Verificada no Google · 1 foto",
    date: "5 meses atrás",
    highlight: "Mais alto nível técnico e acolhimento humano",
    content:
      "Equipe jurídica com mais alto nível técnico. Atendimento humanizado, sempre em busca de acolhimento e melhor resolução para o cliente.",
  },
  {
    name: "Tassia Dias Cordeiro",
    badge: "Avaliação Verificada no Google · 4 fotos",
    date: "5 meses atrás",
    highlight: "Profissionais muito competentes e atenciosos",
    content:
      "Profissionais muito competentes e atenciosos. Recomendo de olhos fechados, o melhor da região!!",
  },
  {
    name: "Wesleymuito lindo este louvor Oliveira",
    badge: "Avaliação Verificada no Google",
    date: "5 meses atrás",
    highlight: "Atendimento excelente, esse advogado é top, o melhor da região",
    content:
      "Atendimento excelente, o Dr. Bruno e suas secretárias estão de parabéns, esse advogado é top, top, é o melhor da região. 👏👏👏👏",
  },
  {
    name: "Jennifer Karin",
    badge: "Avaliação no Google · 3 avaliações",
    date: "5 meses atrás",
    highlight: "Atendimento humanizado e de excelência",
    content:
      "Atendimento humanizado e de excelência, com equipe altamente profissional, transparente e comprometida em oferecer segurança e confiança ao cliente.",
  },
  {
    name: "Rivanildo",
    badge: "Avaliação Verificada no Google · 4 avaliações",
    date: "um ano atrás",
    highlight: "Defendendo seus direitos com total dedicação",
    content:
      "Grande profissional que atua com dedicação, defendendo seus direitos. Aqui você está bem assistido!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  dark = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={dark ? "eyebrow-dark mb-3.5" : "eyebrow mb-3.5"}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl leading-[1.12] tracking-[-0.02em] font-bold sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-[#14110e]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#c7bcb1]" : "text-[#544941]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen bg-[#0b0a09] text-[#ede5dc]">
        {/* Top Notification Strip */}
        <div className="relative z-50 border-b border-[#d4a843]/25 bg-[#14110e] px-4 py-2.5 text-xs text-[#d6cbc2]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f5d77f] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#d4a843]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#fbeabb] font-semibold">
                Bruno Barroso · Advocacia e Assessoria Jurídica · Nota Máxima 5,0 ★ no Google (55 avaliações)
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={getWhatsAppUrl("Olá, Dr. Bruno Barroso! Gostaria de falar com o escritório.")}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#f5d77f] transition-colors hover:text-white"
              >
                WhatsApp: {PHONE_DISPLAY}
              </a>
              <span className="hidden text-[#4d433b] sm:inline">|</span>
              <span className="hidden text-[#c7bcb1] sm:inline">
                Turmalina - MG · Atendimento Presencial & Online Nacional
              </span>
            </div>
          </div>
        </div>

        {/* Header / Navbar */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled
              ? "border-b border-[#d4a843]/25 bg-[#0b0a09]/95 backdrop-blur-md shadow-lg shadow-black/70"
              : "border-b border-[#241e17] bg-[#0b0a09]/90 backdrop-blur-xs"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
            {/* Logo */}
            <a
              href="#inicio"
              aria-label="Bruno Barroso Advocacia e Assessoria Jurídica"
              className="group flex shrink-0 items-center mr-6 lg:mr-10 xl:mr-14 transition-transform hover:scale-[1.02]"
            >
              <Image
                src={LOGO_SRC}
                alt="Bruno Barroso - Advocacia e Assessoria Jurídica"
                width={480}
                height={120}
                priority
                className="h-[46px] w-auto object-contain drop-shadow-[0_2px_12px_rgba(212,168,67,0.25)] sm:h-[52px] lg:h-[58px] xl:h-[64px]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-4 xl:gap-6 lg:flex shrink-0 text-[11px] xl:text-xs"
            >
              <a className="nav-link-dark" href="#inicio">
                Início
              </a>
              <a className="nav-link-dark" href="#sobre">
                O Escritório & Equipe
              </a>
              <a className="nav-link-dark" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link-dark" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link-dark" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link-dark" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Header CTA & Mobile Button */}
            <div className="flex items-center gap-3 shrink-0 ml-4 lg:ml-6">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Bruno Barroso! Gostaria de consultar sobre a minha causa com o escritório."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="hidden sm:inline-flex"
              >
                <WhatsAppIcon size={15} /> Consulta no WhatsApp
              </GlowingButton>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="grid size-10 place-items-center rounded-lg border border-[#d4a843]/30 bg-[#1a1612] text-[#fbeabb] transition-colors hover:border-[#f5d77f] hover:text-white lg:hidden cursor-pointer"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-b border-[#d4a843]/20 bg-[#14110e] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="border-b border-[#d4a843]/20 pb-3">
                    <Image
                      src={LOGO_SRC}
                      alt="Bruno Barroso Advocacia e Assessoria Jurídica"
                      width={280}
                      height={70}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório & Equipe", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold tracking-wide text-[#d6cbc2] transition-colors hover:text-[#f5d77f]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="pt-3">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dr. Bruno Barroso! Gostaria de consultar sobre a minha demanda jurídica."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} /> Falar com o Dr. Bruno
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate overflow-hidden border-b border-[#d4a843]/20 bg-gradient-to-b from-[#0b0a09] via-[#14110e] to-[#1a1612] py-16 sm:py-24 lg:py-28"
        >
          {/* Ambient Lighting & Metallic Gold Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 -z-10 size-[38rem] rounded-full bg-[#d4a843]/12 blur-[110px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 size-[32rem] rounded-full bg-[#96681e]/10 blur-[100px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl"
            >
              {/* Authority Badge */}
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4a843]/40 bg-[#1a1612]/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fbeabb] shadow-xs backdrop-blur-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#f5d77f] shadow-[0_0_8px_#f5d77f]" />
                <span>BRUNO BARROSO · ADVOCACIA E ASSESSORIA JURÍDICA · OAB/MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.35rem]"
              >
                Justiça com ética, clareza e compromisso na defesa dos{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#f5d77f] via-[#fbeabb] to-[#d4a843]">
                  seus direitos e do seu patrimônio.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#c7bcb1] sm:text-base sm:leading-8"
              >
                ⚖️ Mais de <strong className="text-white">14 anos de tradição jurídica</strong> em Turmalina e região. Atuação especializada em <strong className="text-white">Direito Previdenciário (Aposentadorias do INSS)</strong>, <strong className="text-white">Assessoria Jurídica Empresarial</strong>, <strong className="text-white">Direito Imobiliário</strong> e <strong className="text-white">Cível & Sucessões</strong>. Rigor técnico apurado, acolhimento humanizado e agilidade comprovada em resultados.
              </motion.p>

              {/* Fast Trust Indicators */}
              <motion.div
                variants={reveal}
                className="mt-7 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold text-[#d6cbc2]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4a843]/35 bg-[#1a1612]/90 px-3.5 py-1.5 shadow-xs text-[#fbeabb] hover:border-[#f5d77f] hover:text-white transition-colors"
                >
                  <Star size={13} className="fill-[#d4a843] text-[#d4a843]" />
                  Nota Máxima 5,0 ★ no Google (55 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4a843]/35 bg-[#1a1612]/90 px-3.5 py-1.5 shadow-xs text-[#fbeabb]">
                  <Scale size={13} className="text-[#f5d77f]" />
                  +14 Anos de Advocacia
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4a843]/35 bg-[#1a1612]/90 px-3.5 py-1.5 shadow-xs text-[#fbeabb]">
                  <MapPin size={13} className="text-[#f5d77f]" />
                  Turmalina - MG & Atendimento Nacional
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Barroso! Gostaria de agendar uma consulta com seu escritório."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar com o Dr. Bruno
                </GlowingButton>

                <GlowingButton
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  size="lg"
                  variant="outline"
                  className="rounded-lg"
                >
                  <Phone size={16} /> Ligar: {PHONE_DISPLAY}
                </GlowingButton>
              </motion.div>

              <motion.p
                variants={reveal}
                className="mt-4 text-xs text-[#8f8174]"
              >
                Atendimento presencial na Av. Lauro Machado, 390 - Centro, Turmalina - MG ou suporte jurídico digital seguro para todo o Brasil.
              </motion.p>
            </motion.div>

            {/* Right Column / Hero Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              {/* Outer Golden Halo Frame */}
              <div className="relative aspect-[3/3.85] overflow-hidden rounded-2xl border-2 border-[#d4a843]/50 bg-[#1a1612] shadow-2xl shadow-black/80">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Bruno Barroso — Advocacia e Assessoria Jurídica"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-[54%_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/65 to-transparent" />
              </div>

              {/* Authority Floating Card */}
              <div className="absolute -bottom-6 -left-3 max-w-[320px] rounded-xl border border-[#d4a843]/50 bg-[#14110e]/95 p-4 shadow-2xl backdrop-blur-md sm:-left-6 sm:p-5">
                <div className="flex items-center gap-1 text-[#d4a843]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#d4a843] text-[#d4a843]"
                    />
                  ))}
                  <span className="ml-1 text-xs font-bold text-white">5,0 ★</span>
                </div>
                <p className="mt-1 font-serif text-sm font-bold text-white">
                  Dr. Bruno Barroso
                </p>
                <p className="text-[11px] font-medium text-[#fbeabb]">
                  Advocacia e Assessoria Jurídica · +14 Anos
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#c7bcb1]">
                  &ldquo;Profissionalismo exemplar, atenção e conhecimento. Explicou cada etapa com clareza, transmitindo segurança e confiança.&rdquo;
                </p>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -right-3 top-6 rounded-lg border border-[#d4a843]/45 bg-[#14110e]/95 px-3 py-2 text-right shadow-xl backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-1.5 text-[#f5d77f]">
                  <Sparkles size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    55 Avaliações Reais
                  </span>
                </div>
                <p className="text-[10px] text-[#8f8174]">Google 5,0 Estrelas</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Pillars Strip (Barra de Destaques) */}
        <section className="border-b border-[#d4a843]/20 bg-[#14110e] px-5 py-8 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d4a843]/30 bg-[#1a1612] text-[#f5d77f]">
                <Star size={18} className="fill-[#d4a843]" />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Nota 5,0 no Google</p>
                <p className="text-[11px] text-[#c7bcb1]">55 avaliações unânimes</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d4a843]/30 bg-[#1a1612] text-[#f5d77f]">
                <Scale size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">+14 Anos de Atuação</p>
                <p className="text-[11px] text-[#c7bcb1]">Tradição, ética e solidez</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d4a843]/30 bg-[#1a1612] text-[#f5d77f]">
                <Award size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Previdenciário & Cível</p>
                <p className="text-[11px] text-[#c7bcb1]">Aposentadorias e Contratos</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d4a843]/30 bg-[#1a1612] text-[#f5d77f]">
                <Building2 size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Turmalina & Região</p>
                <p className="text-[11px] text-[#c7bcb1]">Presencial e Digital Seguro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Escritório & Equipe */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#e8ded3] bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Portrait at Library */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#d4a843]/45 bg-[#f4efe6] shadow-xl">
                <Image
                  src={FOTO_ABOUT_SRC}
                  alt="Dr. Bruno Barroso — Biblioteca e Acervo Jurídico"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#14110e]/75 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#d4a843]/50 bg-white p-5 shadow-xl sm:-right-6">
                <div className="flex items-center gap-2 text-[#96681e]">
                  <Award size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#96681e]">
                    Corpo Jurídico de Excelência
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg font-bold leading-snug text-[#14110e]">
                  Dr. Bruno Barroso & Equipe
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#96681e]">
                  Dra. Karin & Advogados Especialistas
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#544941]">
                  Av. Lauro Machado, 390 - Centro, Turmalina - MG · Comarca de Turmalina e Região
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#d4a843]/50 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#d4a843]/40 bg-[#fdf9ee] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#96681e] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#d4a843]" />
                <span>CONHEÇA O ESCRITÓRIO BRUNO BARROSO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-[#14110e] sm:text-4xl lg:text-[2.85rem]"
              >
                Mais de 14 anos de compromisso ético, rigor técnico e dedicação incansável para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#96681e] via-[#d4a843] to-[#b58428]">
                  proteger o que é seu por direito.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#544941]"
              >
                O escritório <strong className="font-bold text-[#14110e]">Bruno Barroso — Advocacia e Assessoria Jurídica</strong> consolidou-se como a principal referência da Comarca de Turmalina e do Vale do Jequitinhonha por aliar profundo conhecimento técnico a um atendimento verdadeiramente humanizado, ético e empático. Liderado pelo <strong className="font-bold text-[#14100e]">Dr. Bruno Barroso</strong> e com a atuação destacada da <strong className="font-bold text-[#14110e]">Dra. Karin</strong> e equipe, o escritório já conduziu centenas de famílias e empresas a vitórias expressivas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#544941]"
              >
                Seja para garantir a aposentadoria justa do trabalhador rural ou urbano no INSS, prestar assessoria jurídica continuada para empresas consolidadas (como a Constrular Móveis), regularizar terras e imóveis por usucapião ou resolver inventários e partilhas com serenidade, nossa missão é oferecer clareza inegociável em cada passo do processo.
              </motion.p>

              {/* 3 Value Pillars */}
              <motion.div
                variants={reveal}
                className="mt-8 grid gap-4 sm:grid-cols-3"
              >
                <div className="rounded-xl border border-[#e8ded3] bg-white p-4 shadow-xs">
                  <span className="text-[#96681e]">
                    <HeartHandshake size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#14110e]">
                    Atendimento Humanizado
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#544941]">
                    Acolhimento transparente e empático, explicando cada etapa sem juridiquês e com atenção a cada detalhe.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-4 shadow-xs">
                  <span className="text-[#96681e]">
                    <Clock size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#14110e]">
                    Agilidade & Resultados
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#544941]">
                    Histórico comprovado de processos vitoriosos, agilidade perante órgãos públicos e combatividade inabalável.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-4 shadow-xs">
                  <span className="text-[#96681e]">
                    <Shield size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#14110e]">
                    Segurança Patrimonial
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#544941]">
                    Blindagem jurídica sólida para empresas, regularização de imóveis e transmissão hereditária com tranquilidade.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Barroso! Gostaria de conversar com o senhor sobre a minha causa."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-sm"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Bruno
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação & Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#d4a843]/20 bg-[#14110e] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                dark
                eyebrow="ÁREAS DE ATUAÇÃO & ESPECIALIDADES"
                description="Expertise jurídica multidisciplinar de mais de 14 anos com foco em Direito Previdenciário (INSS), Assessoria Empresarial, Direito Imobiliário e Cível & Sucessões."
              >
                Soluções jurídicas estratégicas para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f5d77f] via-[#fbeabb] to-[#d4a843]">
                  você, sua família e sua empresa.
                </span>
              </Heading>
              <p className="max-w-[280px] pb-1 text-xs leading-6 text-[#c7bcb1]">
                Clique em uma das áreas abaixo para conferir as demandas atendidas e iniciar seu atendimento direto pelo WhatsApp com a equipe.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-6 md:grid-cols-2"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[340px] flex-col rounded-2xl border border-[#d4a843]/25 bg-[#1a1612] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f5d77f] hover:shadow-2xl hover:shadow-[#d4a843]/15 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-[#d4a843]/30 bg-[#241e17] text-[#f5d77f] shadow-xs transition-colors group-hover:border-[#f5d77f] group-hover:bg-[#d4a843] group-hover:text-[#0b0a09]">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#d4a843]/40 transition-colors group-hover:text-[#f5d77f]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-block rounded-md border border-[#d4a843]/30 bg-[#241e17] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#fbeabb]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.28rem] font-bold leading-snug text-white">
                        {area.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-6 text-[#c7bcb1]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5d77f] hover:text-white cursor-pointer"
                    >
                      Ver detalhes e demandas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher o Escritório Bruno Barroso - 4 Diferenciais Reais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#e8ded3] bg-white py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="REPUTAÇÃO MÁXIMA 5,0 ★ NO GOOGLE (55 AVALIAÇÕES)"
                description="Clareza inegociável, atendimento acolhedor, agilidade nas decisões e solidez para proteger seu futuro em Turmalina e Minas Gerais."
              >
                Por que confiar a sua causa ao{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#96681e] via-[#d4a843] to-[#b58428]">
                  Escritório Bruno Barroso?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Bruno Barroso! Gostaria de consultar sobre a minha situação jurídica com o escritório."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Consultar no WhatsApp
              </GlowingButton>
            </div>

            {/* Grid 4 Pilares baseados nas avaliações reais */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pilar 1 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d4a843] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-white text-[#96681e] shadow-xs">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14110e]">
                  Atendimento Humanizado
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#544941]">
                  Acolhimento empático pelo Dr. Bruno e Dra. Karin. Explicamos cada fase em linguagem acessível, trazendo paz, previsibilidade e confiança.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#96681e]">
                  &ldquo;Em especial da Dr. Karin profissional carinhosamente empática&rdquo;
                </span>
              </div>

              {/* Pilar 2 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d4a843] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-white text-[#96681e] shadow-xs">
                  <Clock size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14110e]">
                  Agilidade & Causa Ganha
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#544941]">
                  Combatividade diligente perante juizados, cartórios e INSS, destravando benefícios e processos com alto índice de resolução.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#96681e]">
                  &ldquo;Cuidou da aposentadoria do meu pai: Causa ganha!&rdquo;
                </span>
              </div>

              {/* Pilar 3 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d4a843] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-white text-[#96681e] shadow-xs">
                  <Briefcase size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14110e]">
                  Confiança Empresarial
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#544941]">
                  Parceria sólida com grandes comércios e empresas da comarca, garantindo segurança jurídica contínua e mitigação de riscos.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#96681e]">
                  &ldquo;Nossa parceria é motivo de tranquilidade e confiança&rdquo;
                </span>
              </div>

              {/* Pilar 4 */}
              <div className="flex flex-col rounded-2xl border border-[#e8ded3] bg-[#faf7f2] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#d4a843] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-white text-[#96681e] shadow-xs">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#14110e]">
                  Maior da Comarca de Turmalina
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#544941]">
                  Mais de 14 anos de tradição jurídica reconhecida como a estrutura mais preparada e resolutiva da região do Vale do Jequitinhonha.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#96681e]">
                  &ldquo;O melhor e maior escritório da comarca de Turmalina&rdquo;
                </span>
              </div>
            </div>

            {/* Como Funciona o Atendimento */}
            <div className="mt-16 rounded-2xl border border-[#e8ded3] bg-[#f4efe6] p-8 sm:p-12">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#96681e]">
                  PASSO A PASSO TRANSPARENTE & RESOLUTIVO
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#14110e] sm:text-3xl">
                  Como funciona o nosso atendimento
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#544941]">
                  Sem burocracias confusas. Orientamos você com clareza desde o primeiro contato até a conclusão e vitória da sua causa.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-[#e8ded3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#d4a843]">
                    01
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#14110e]">
                    Contato Inicial no WhatsApp
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#544941]">
                    Você envia uma mensagem contando sua situação, seja uma aposentadoria, assessoria empresarial, contrato ou imóvel. Nossa equipe responde prontamente.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#d4a843]">
                    02
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#14110e]">
                    Diagnóstico Jurídico & Estratégia
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#544941]">
                    O Dr. Bruno Barroso e a equipe avaliam CNIS, certidões, escrituras ou contratos para desenhar o caminho mais rápido, seguro e eficiente.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e8ded3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#d4a843]">
                    03
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#14110e]">
                    Ação Ágil & Acompanhamento Próximo
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#544941]">
                    Protocolos e ações imediatas perante o INSS, juizados ou cartórios, com você informado de cada avanço com tranquilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 55 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-[#d4a843]/20 bg-[#14110e] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="PROVA SOCIAL & DEPOIMENTOS NO GOOGLE"
                description="Nota Máxima 5,0 ★ no Google Meu Negócio em Turmalina · MG, com 55 avaliações 100% positivas de quem confiou sua causa ao escritório."
              >
                O que dizem os clientes do{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f5d77f] via-[#fbeabb] to-[#d4a843]">
                  Escritório Bruno Barroso
                </span>
              </Heading>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#d4a843]/30 bg-[#1a1612] px-5 py-3 text-xs font-bold text-white shadow-xs transition-all hover:border-[#f5d77f] hover:bg-[#241e17]"
              >
                <GoogleIcon size={18} />
                <span>Ver 55 avaliações no Google</span>
                <ArrowUpRight size={15} className="text-[#f5d77f]" />
              </a>
            </div>

            {/* Grid of Real Reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-2xl border border-[#d4a843]/20 bg-[#1a1612] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f5d77f] hover:shadow-2xl hover:shadow-[#d4a843]/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#d4a843]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d4a843] text-[#d4a843]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#d4a843]/25 bg-[#241e17] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#fbeabb]">
                        {review.badge}
                      </span>
                    </div>

                    {review.highlight && (
                      <p className="mt-3 text-xs font-bold text-[#f5d77f]">
                        {review.highlight}
                      </p>
                    )}

                    <p className="mt-3 text-xs leading-6 text-[#ede5dc]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#2b231b] pt-4">
                    <p className="font-serif text-sm font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#8f8174]">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Turmalina - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#e8ded3] bg-white py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO JURÍDICO"
                description="Converse diretamente com o Dr. Bruno Barroso e sua equipe jurídica. Oferecemos atendimento presencial acolhedor no Centro de Turmalina e suporte digital seguro para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#96681e] via-[#d4a843] to-[#b58428]">
                  orientar você e proteger o seu direito.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Barroso! Gostaria de agendar um atendimento com o escritório."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-xs text-[#544941]">
                  WhatsApp oficial:{" "}
                  <strong className="text-[#14110e]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#544941]">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-[#96681e]" />
                  <div>
                    <p className="font-bold text-[#14110e]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#3d342f]">
                      Segunda a Sexta-feira · Abre às 08:00
                    </p>
                    <p className="text-[11px] font-semibold text-[#96681e]">
                      Atendimento Presencial & Atendimento Digital Nacional
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#96681e]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-bold text-[#14110e] transition-colors hover:text-[#96681e]"
                  >
                    {PHONE_DISPLAY} (WhatsApp e Ligações)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#96681e]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#3d342f] transition-colors hover:text-[#96681e]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#96681e]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="font-medium text-[#3d342f] transition-colors hover:text-[#96681e]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#96681e]" />
                  <span className="font-medium text-[#3d342f]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#d4a843]/35 bg-[#faf7f2] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#d4a843] to-[#f5d77f]" />

              <div className="flex items-center gap-4">
                <Image
                  src={LOGO_SRC}
                  alt="Bruno Barroso Advocacia e Assessoria Jurídica"
                  width={380}
                  height={95}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div>

              <address className="mt-7 max-w-md text-sm not-italic leading-7 text-[#544941]">
                <strong className="font-bold text-[#14110e]">
                  Bruno Barroso — Advocacia e Assessoria Jurídica
                </strong>
                <br />
                Dr. Bruno Barroso · OAB/MG · +14 Anos de Experiência
                <br />
                Dra. Karin & Corpo Jurídico Especializado
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-[#e8ded3] bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#96681e]">
                  Disponibilidade & Modalidades
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-[#544941]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-bold text-[#14110e]">
                    Abre às 08:00 (Seg a Sex)
                  </span>
                  <span>Atendimento Digital</span>
                  <span className="text-right font-bold text-[#96681e]">
                    Turmalina e Todo o Brasil via WhatsApp
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-[#14110e]">Turmalina - MG</span>
                  <span>Áreas de Foco</span>
                  <span className="text-right text-[#14110e]">Previdenciário, Empresarial & Imóveis</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8ded3]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786c63]">
                  Atendimento ético, confidencial e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Barroso! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d4a843]/50 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#96681e] transition-colors hover:border-[#d4a843] hover:bg-[#fdf9ee] hover:text-[#14110e]"
                >
                  <WhatsAppIcon size={14} /> Falar com o Dr. Bruno <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Obsidian & Gold Metallic Banner */}
        <section className="border-t border-[#d4a843]/30 bg-gradient-to-r from-[#0b0a09] via-[#1a1612] to-[#0b0a09] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fbeabb]">
                <Sparkles size={13} /> BRUNO BARROSO · ADVOCACIA E ASSESSORIA JURÍDICA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
                Precisa de segurança jurídica para sua aposentadoria, empresa ou patrimônio imobiliário?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Bruno Barroso! Gostaria de conversar sobre uma demanda jurídica com o seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#96681e] via-[#d4a843] to-[#a8782a] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0b0a09] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#241e17] bg-[#070605] px-5 py-14 text-[#c7bcb1] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Bruno Barroso Advocacia e Assessoria Jurídica"
                className="inline-flex items-center transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Bruno Barroso Advocacia e Assessoria Jurídica"
                  width={320}
                  height={80}
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#c7bcb1]">
                ⚖️ Advocacia de alto padrão pautada no rigor técnico, acolhimento humano e agilidade. Mais de 14 anos de tradição em Direito Previdenciário (Aposentadorias e Benefícios do INSS), Assessoria Empresarial, Direito Imobiliário e Cível & Sucessões. Nota Máxima 5,0 ★ no Google com 55 avaliações unânimes em Turmalina - MG.
              </p>
              <p className="mt-3 text-[11px] font-bold text-[#f5d77f]">
                Dr. Bruno Barroso · OAB/MG · Turmalina - MG
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d77f]">
                Navegação
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#c7bcb1]">
                <a className="footer-link font-medium hover:text-[#f5d77f]" href="#inicio">
                  Início
                </a>
                <a className="footer-link font-medium hover:text-[#f5d77f]" href="#sobre">
                  O Escritório & Equipe
                </a>
                <a className="footer-link font-medium hover:text-[#f5d77f]" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link font-medium hover:text-[#f5d77f]" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link font-medium hover:text-[#f5d77f]" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link font-medium hover:text-[#f5d77f]" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d77f]">
                Contato & Atendimento
              </h3>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#c7bcb1]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Barroso! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-bold text-[#f5d77f]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Phone size={15} className="shrink-0 text-[#f5d77f]" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <InstagramIcon size={15} className="shrink-0 text-[#f5d77f]" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Mail size={15} className="shrink-0 text-[#f5d77f]" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2 font-medium">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#f5d77f]" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] font-bold text-[#f5d77f]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · Abre às 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#241e17] pt-6 text-[10px] text-[#786c63] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} BRUNO BARROSO — ADVOCACIA E ASSESSORIA JURÍDICA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo de caráter exclusivamente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dr. Bruno Barroso! Gostaria de consultar sobre meus direitos com o escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Bruno Barroso"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#14110e] border border-[#d4a843]/40 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity group-hover:block">
              Falar com o Dr. Bruno Barroso
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#d4a843]/40 bg-[#14110e] p-7 text-[#ede5dc] shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#d4a843]/30 bg-[#1a1612] text-[#fbeabb] transition-colors hover:border-[#f5d77f] hover:bg-[#d4a843] hover:text-[#0b0a09] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-dark">{activeArea.category.toUpperCase()}</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#c7bcb1]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#241e17] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f5d77f]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-xs leading-5 text-[#ede5dc]"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#d4a843]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-bold text-[#8f8174] transition-colors hover:text-white cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
