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
  FileText,
  BadgeCheck,
  Home as HomeIcon,
  Gavel,
  CheckCircle2,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533991274893";
const WHATSAPP_SECONDARY = "553399506493";
const PHONE_DISPLAY = "(33) 99127-4893";
const PHONE_SECONDARY_DISPLAY = "(33) 9950-6493";
const EMAIL_CONTACT = "contato@antunesemartins.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/antunesemartins.advocacia/";
const INSTAGRAM_HANDLE = "@antunesemartins.advocacia";

const ADDRESS_TEXT = "R. Caxambú, 230 - Centro, Nanuque - MG, 39860-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Antunes+%26+Martins+Advocacia+Especializada%0ANanuque+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_ABOUT_SRC = "/about.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de uma consultoria jurídica com o escritório Antunes & Martins Advocacia Especializada.";
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
    id: "direito-civel",
    title: "Direito Cível & Resolução Estratégica",
    category: "Cível · Contratos · Indenizações · Obrigações · Consumidor",
    icon: Scale,
    tag: "Ações Indenizatórias · Contratos · Cobranças · Danos Morais & Materiais",
    summary:
      "Atuação contenciosa e consultiva de excelência para proteger seus direitos civis, resolver litígios complexos e salvaguardar seu patrimônio com segurança jurídica.",
    details:
      "As relações civis demandam precisão técnica, firmeza e estratégia. O escritório Antunes & Martins Advocacia Especializada atua na elaboração e revisão de contratos, defesas cíveis, ações de indenização por perdas e danos materiais ou morais, recuperação de créditos e solução de conflitos judiciais e extrajudiciais.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e lucros cessantes",
      "Elaboração, análise e rescisão de contratos civis e comerciais com cláusulas protetivas",
      "Cobrança judicial e extrajudicial de títulos de crédito e recuperação de valores",
      "Defesa dos direitos do consumidor contra abusos bancários, fraudes e concessionárias",
      "Ações de despejo, rescisões locatícias e litígios patrimoniais",
      "Assessoria em notificações judiciais, medidas cautelares e acordos extrajudiciais",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a equipe da Antunes & Martins sobre uma questão de Direito Cível / Contratos.",
  },
  {
    id: "direito-criminal",
    title: "Direito Criminal & Defesa Penal Combativa",
    category: "Criminal · Delegacia · Audiência de Custódia · Habeas Corpus",
    icon: Shield,
    tag: "Flagrantes · Liberdade Provisória · Inquéritos · Tribunal do Júri · Recursos",
    summary:
      "Defesa técnica intransigente da liberdade e das garantias constitucionais, com atendimento ágil e combate diligente em todas as fases do processo penal.",
    details:
      "Situações criminais exigem intervenção jurídica imediata, estratégica e absolutamente sigilosa. A Antunes & Martins Advocacia Especializada acompanha o cliente desde a fase policial em flagrantes e depoimentos até os tribunais superiores, resguardando direitos fundamentais contra excessos e ilegalidades.",
    topics: [
      "Atendimento urgente em delegacias para prisão em flagrante e interrogatórios",
      "Acompanhamento presencial em audiências de custódia e pedidos de liberdade provisória",
      "Impetração de Habeas Corpus preventivo e liberatório perante Tribunais de Justiça e Superiores",
      "Defesa combativa em inquéritos policiais, ações penais e Tribunal do Júri",
      "Atuação em crimes contra o patrimônio, honra, delitos de trânsito e crimes da era digital",
      "Execução penal, progressão de regime, livramento condicional e remição de pena",
    ],
    whatsAppText:
      "Olá! Preciso de orientação jurídica urgente em Direito Criminal com a Antunes & Martins Advocacia.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito do Trabalho (Trabalhista)",
    category: "Trabalho · Reclamatórias · Rescisões · Verbas · Acidentes",
    icon: Briefcase,
    tag: "Verbas Rescisórias · Horas Extras · Insalubridade · Rescisão Indireta",
    summary:
      "Garantia integral dos direitos trabalhistas e suporte consultivo preventivo para relações de trabalho justas, equilibradas e em estrito cumprimento da lei.",
    details:
      "Tanto na defesa combativa do trabalhador lesado quanto na orientação estratégica para empresas evitarem passivos, o escritório Antunes & Martins entrega atuação aprofundada perante a Justiça do Trabalho, identificando irregularidades contratuais e buscando a justa reparação com celeridade.",
    topics: [
      "Reclamatórias trabalhistas para cobrança de verbas rescisórias não pagas",
      "Reconhecimento de vínculo de emprego sem anotação em carteira de trabalho (CTPS)",
      "Cobrança de horas extras, intervalos intrajornada, adicional noturno e descanso semanal",
      "Adicionais de insalubridade e periculosidade em atividades de risco ou exposição a agentes nocivos",
      "Ações por acidente de trabalho, doenças ocupacionais e estabilidade provisória",
      "Rescisão indireta do contrato de trabalho ('justa causa no empregador') por falta grave ou assédio",
    ],
    whatsAppText:
      "Olá! Gostaria de uma avaliação sobre os meus direitos trabalhistas com a Antunes & Martins Advocacia.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    category: "Família · Divórcio · Pensão Alimentícia · Guarda · Inventários",
    icon: HeartHandshake,
    tag: "Inventário em Cartório · Partilhas de Bens · Divórcio · Alimentos & Guarda",
    summary:
      "Condução sensível, técnica e equilibrada para momentos decisivos da vida familiar, assegurando proteção aos filhos, acordos justos e tranquilidade patrimonial.",
    details:
      "Questões de família exigem sensibilidade humana ímpar combinada a rigor jurídico absoluto. Atuamos com dedicação em inventários ágeis em cartório e judiciais, divórcios consensuais e litigiosos, fixação e revisão de alimentos, guarda compartilhada e dissolução de união estável.",
    topics: [
      "Inventários extrajudiciais em cartório: transmissão célere de bens com economia tributária",
      "Inventários judiciais, partilha de patrimônio litigioso e alvarás para levantamento de valores",
      "Divórcio consensual e litigioso com partilha justa de patrimônio do casal",
      "Fixação, revisão, exoneração e execução de pensão alimentícia atrasada",
      "Ações de guarda, regulamentação de convivência e proteção de menores",
      "Reconhecimento e dissolução de união estável, união homoafetiva e pactos antenupciais",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a equipe sobre Direito de Família / Inventário / Divórcio com sigilo e discrição.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Aposentadorias (INSS)",
    category: "Previdenciário · Aposentadorias · BPC/LOAS · Benefícios · Revisões",
    icon: Award,
    tag: "Aposentadoria por Idade · Rural & Urbana · BPC/LOAS · Auxílio-Doença · INSS",
    summary:
      "Planejamento minucioso e atuação firme contra o INSS para desbloquear o benefício a que você tem direito, garantindo o melhor valor e recebimento de retroativos.",
    details:
      "A conquista do benefício do INSS representa a segurança financeira da sua vida e da sua família. O escritório Antunes & Martins atua desde a análise do CNIS e planejamento previdenciário preventivo até a interposição de recursos administrativos e ações judiciais combativas contra indeferimentos indevidos.",
    topics: [
      "Planejamento previdenciário estratégico para conquistar o maior valor de benefício possível",
      "Aposentadoria por idade urbana e rural (trabalhadores da lavoura e agricultura familiar de Nanuque e região)",
      "Aposentadoria especial por tempo de exposição a agentes insalubres e regras de transição",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos de 65+ anos e pessoas com deficiência",
      "Auxílio por incapacidade temporária (auxílio-doença) e aposentadoria por invalidez permanente",
      "Pensão por morte, salário-maternidade, auxílio-reclusão e reversão de indeferimentos judiciais",
    ],
    whatsAppText:
      "Olá! Gostaria de analisar a minha aposentadoria ou benefício do INSS com a Antunes & Martins Advocacia.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  content: string;
  highlight?: string;
}

const clientReviews: Review[] = [
  {
    name: "Lucas Gustavo",
    badge: "Local Guide · 3 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Tem conhecimento das causas e cuida dos seus interesses com suporte integral",
    content:
      "Ótima profissional, tem conhecimento das causas que advoga e e presta todo suporte para o cliente. Recomendo demais para quem está querendo um escritório que cuida dos seus interesses sem que você tenha que se preocupar em acompanhar o processo também!!",
  },
  {
    name: "Apps Brasil",
    badge: "Local Guide · 31 avaliações · 3 fotos · 5 Estrelas",
    date: "um ano atrás",
    highlight: "Rico conhecimento jurídico e trabalho maravilhoso",
    content:
      "Parabéns a essa excelente Dra. Pelo rico conhecimento jurídico, continue assim realizando esse trabalho maravilhoso. Seja luz nos caminhos obscuro e desembaraço nos nosda vida.",
  },
  {
    name: "Robson Dias Martins",
    badge: "Local Guide · 12 avaliações · 49 fotos · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Contratei de Betim: a Dra. Giovana resolveu rapidamente, muito competente!",
    content:
      "Sou de Betim contratei os serviços da Dr Giovana resolveu rapidamente muito competente!",
  },
  {
    name: "Charles Castro Luz Júnior",
    badge: "4 avaliações · 1 foto · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Instruiu da melhor forma com alta capacidade técnica",
    content:
      "Precisei de serviços advocatícios de assuntos de redes sociais e a Dr.Giovanna me instruiu da melhor forma, recomendo 👍",
  },
  {
    name: "Élmada Luz",
    badge: "2 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Melhor profissional da cidade em Nanuque - MG",
    content:
      "Melhor profissional da cidade.",
  },
  {
    name: "Elene Rangel",
    badge: "4 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Profissional competente, responsável com amor e dedicação ao que faz",
    content:
      "Profissional competente e responsável. Amor e dedicação ao que faz!",
  },
  {
    name: "Gabriela dos Santos Oliveira Moreira",
    badge: "Avaliação Verificada no Google · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Profissional exemplar, dedicada e estudiosa",
    content:
      "Profissional exemplar, dedicada e estudiosa.",
  },
  {
    name: "Rayanna Costa Coimbra",
    badge: "4 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Competente, dedicada e responsável",
    content:
      "Competente, dedicada e responsável.",
  },
  {
    name: "Junior Pereira",
    badge: "2 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Excelente advogada, super capacitada",
    content:
      "Excelente advogada. Super capacitada.",
  },
  {
    name: "Caroline Soares",
    badge: "3 avaliações · 1 foto · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Excelente profissional. Recomendo de coração",
    content:
      "Excelente profissional. Recomendo 👏🏻👏🏻❤️",
  },
  {
    name: "Rosilane Martins",
    badge: "Avaliação Verificada no Google · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Excelente profissional, muito dedicada no que faz",
    content:
      "Excelente profissional, mto dedicada no q faz.",
  },
  {
    name: "Vivian Silva Costa",
    badge: "Avaliação Verificada no Google · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Excelente profissional de extrema confiança",
    content:
      "Excelente Profissional!!",
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
          dark ? "text-white" : "text-[#0b1e2e]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#c2d3e2]" : "text-[#475b6d]"
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
      <main className="relative min-h-screen bg-[#071521] text-[#edf2f7]">
        {/* Top Notification Strip */}
        <div className="relative z-50 border-b border-[#dfb135]/25 bg-[#0b1e2e] px-4 py-2.5 text-xs text-[#cbd5e1]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#fad962] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#dfb135]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#faecba] font-semibold">
                Antunes & Martins Advocacia Especializada · Nota Máxima 5,0 ★ no Google (39 avaliações)
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com o escritório Antunes & Martins Advocacia.")}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#fad962] transition-colors hover:text-white"
              >
                WhatsApp: {PHONE_DISPLAY}
              </a>
              <span className="hidden text-[#1e4566] sm:inline">|</span>
              <span className="hidden text-[#c2d3e2] sm:inline">
                Nanuque - MG · Atendimento Online e Presencial
              </span>
            </div>
          </div>
        </div>

        {/* Header / Navbar */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled
              ? "border-b border-[#dfb135]/25 bg-[#071521]/95 backdrop-blur-md shadow-lg shadow-black/70"
              : "border-b border-[#14324a] bg-[#071521]/90 backdrop-blur-xs"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
            {/* Logo */}
            <a
              href="#inicio"
              aria-label="Antunes & Martins Advocacia Especializada"
              className="group flex shrink-0 items-center mr-6 lg:mr-10 xl:mr-14 transition-transform hover:scale-[1.02]"
            >
              <Image
                src={LOGO_SRC}
                alt="Antunes & Martins Advocacia Especializada"
                width={480}
                height={150}
                priority
                className="h-[60px] w-auto object-contain drop-shadow-[0_2px_14px_rgba(223,177,53,0.30)] sm:h-[68px] lg:h-[76px] xl:h-[84px]"
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
                  "Olá! Gostaria de consultar sobre o meu caso com a Antunes & Martins Advocacia Especializada."
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
                className="grid size-10 place-items-center rounded-lg border border-[#dfb135]/30 bg-[#0f273b] text-[#faecba] transition-colors hover:border-[#fad962] hover:text-white lg:hidden cursor-pointer"
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
                className="overflow-hidden border-b border-[#dfb135]/20 bg-[#0b1e2e] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="border-b border-[#dfb135]/20 pb-3">
                    <Image
                      src={LOGO_SRC}
                      alt="Antunes & Martins Advocacia Especializada"
                      width={280}
                      height={90}
                      className="h-[52px] w-auto object-contain"
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
                      className="text-sm font-semibold tracking-wide text-[#cbd5e1] transition-colors hover:text-[#fad962]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="pt-3">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá! Gostaria de uma consultoria com a Dra. Giovana e equipe Antunes & Martins."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
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
          className="relative isolate overflow-hidden border-b border-[#dfb135]/20 bg-gradient-to-b from-[#071521] via-[#0b1e2e] to-[#0f273b] py-16 sm:py-24 lg:py-28"
        >
          {/* Ambient Lighting & Metallic Gold Sheens */}
          <div className="pointer-events-none absolute -right-20 -top-20 -z-10 size-[38rem] rounded-full bg-[#dfb135]/12 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 size-[34rem] rounded-full bg-[#13476a]/25 blur-[110px]" />

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
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#dfb135]/40 bg-[#0f273b]/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#faecba] shadow-xs backdrop-blur-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#fad962] shadow-[0_0_8px_#fad962]" />
                <span>ANTUNES & MARTINS · ADVOCACIA ESPECIALIZADA · NANUQUE - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.35rem]"
              >
                Advocacia combativa e especializada na defesa dos{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fad962] via-[#faecba] to-[#dfb135]">
                  seus direitos e do seu futuro.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#c2d3e2] sm:text-base sm:leading-8"
              >
                ⚖️ <strong className="text-white">Nossa missão é buscar justiça com ética e profissionalismo.</strong> Atuação jurídica de alto rigor técnico e atendimento acolhedor em <strong className="text-white">Direito Cível</strong>, <strong className="text-white">Criminal</strong>, <strong className="text-white">Trabalhista</strong>, <strong className="text-white">Família & Sucessões</strong> e <strong className="text-white">Previdenciário (INSS)</strong>. Atendimento presencial em Nanuque - MG e assessoria digital segura para todo o Brasil.
              </motion.p>

              {/* Fast Trust Indicators */}
              <motion.div
                variants={reveal}
                className="mt-7 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold text-[#cbd5e1]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfb135]/35 bg-[#0f273b]/90 px-3.5 py-1.5 shadow-xs text-[#faecba] hover:border-[#fad962] hover:text-white transition-colors"
                >
                  <Star size={13} className="fill-[#dfb135] text-[#dfb135]" />
                  Nota Máxima 5,0 ★ no Google (39 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfb135]/35 bg-[#0f273b]/90 px-3.5 py-1.5 shadow-xs text-[#faecba]">
                  <Scale size={13} className="text-[#fad962]" />
                  Advocacia Especializada & Ética
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfb135]/35 bg-[#0f273b]/90 px-3.5 py-1.5 shadow-xs text-[#faecba]">
                  <MapPin size={13} className="text-[#fad962]" />
                  Nanuque - MG & Atendimento Nacional
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta com o escritório Antunes & Martins Advocacia Especializada."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp
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
                className="mt-4 text-xs text-[#829bb0]"
              >
                Sede física na R. Caxambú, 230 - Centro, Nanuque - MG ou atendimento jurídico online com total sigilo.
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
              <div className="relative aspect-[3/3.85] overflow-hidden rounded-2xl border-2 border-[#dfb135]/50 bg-[#0f273b] shadow-2xl shadow-black/80">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Giovana e equipe da Antunes & Martins Advocacia Especializada"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#071521] via-[#071521]/65 to-transparent" />
              </div>

              {/* Authority Floating Card */}
              <div className="absolute -bottom-6 -left-3 max-w-[320px] rounded-xl border border-[#dfb135]/50 bg-[#0b1e2e]/95 p-4 shadow-2xl backdrop-blur-md sm:-left-6 sm:p-5">
                <div className="flex items-center gap-1 text-[#dfb135]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#dfb135] text-[#dfb135]"
                    />
                  ))}
                  <span className="ml-1 text-xs font-bold text-white">5,0 ★</span>
                </div>
                <p className="mt-1 font-serif text-sm font-bold text-white">
                  Antunes & Martins
                </p>
                <p className="text-[11px] font-medium text-[#faecba]">
                  Advocacia Especializada · Nanuque - MG
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#c2d3e2]">
                  &ldquo;Ótima profissional, tem conhecimento das causas que advoga e presta todo suporte para o cliente sem que você precise se preocupar!&rdquo;
                </p>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -right-3 top-6 rounded-lg border border-[#dfb135]/45 bg-[#0b1e2e]/95 px-3 py-2 text-right shadow-xl backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-1.5 text-[#fad962]">
                  <Sparkles size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    39 Avaliações Reais
                  </span>
                </div>
                <p className="text-[10px] text-[#829bb0]">Google 5,0 Estrelas</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Pillars Strip (Barra de Destaques) */}
        <section className="border-b border-[#dfb135]/20 bg-[#0b1e2e] px-5 py-8 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dfb135]/30 bg-[#14324a] text-[#fad962]">
                <Star size={18} className="fill-[#dfb135]" />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Nota 5,0 no Google</p>
                <p className="text-[11px] text-[#c2d3e2]">39 avaliações unânimes</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dfb135]/30 bg-[#14324a] text-[#fad962]">
                <Scale size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Ética & Rigor Técnico</p>
                <p className="text-[11px] text-[#c2d3e2]">Defesa intransigente</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dfb135]/30 bg-[#14324a] text-[#fad962]">
                <Award size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">5 Áreas de Atuação</p>
                <p className="text-[11px] text-[#c2d3e2]">Cível, Crime, Trabalho, Família, INSS</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dfb135]/30 bg-[#14324a] text-[#fad962]">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-white">Online & Presencial</p>
                <p className="text-[11px] text-[#c2d3e2]">Sede em Nanuque e todo o país</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Escritório & Equipe */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#e6dfd3] bg-[#f9f8f5] py-20 text-[#0b1e2e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Portrait at Office */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#dfb135]/45 bg-[#f2efe8] shadow-xl">
                <Image
                  src={FOTO_ABOUT_SRC}
                  alt="Antunes & Martins Advocacia Especializada - Escritório Oficial"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0b1e2e]/75 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#dfb135]/50 bg-white p-5 shadow-xl sm:-right-6">
                <div className="flex items-center gap-2 text-[#9e751e]">
                  <Award size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9e751e]">
                    Corpo Jurídico Especializado
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg font-bold leading-snug text-[#0b1e2e]">
                  Antunes & Martins Advocacia
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#9e751e]">
                  Dra. Giovana & Equipe Jurídica
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#475b6d]">
                  R. Caxambú, 230 - Centro, Nanuque - MG · Comarca de Nanuque e Atendimento Nacional
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#dfb135]/50 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#dfb135]/40 bg-[#fdf8eb] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9e751e] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#dfb135]" />
                <span>CONHEÇA A ANTUNES & MARTINS ADVOCACIA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-[#0b1e2e] sm:text-4xl lg:text-[2.85rem]"
              >
                Nossa missão é buscar justiça com ética e profissionalismo para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e751e] via-[#dfb135] to-[#c79a29]">
                  proteger os seus direitos fundamentais.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#475b6d]"
              >
                O escritório <strong className="font-bold text-[#0b1e2e]">Antunes & Martins Advocacia Especializada</strong> destaca-se em Nanuque e em todo o estado de Minas Gerais como sinônimo de dedicação combativa, rigor técnico apurado e acolhimento humano exemplar. Liderado por advogadas dedicadas e estudiosas, o escritório conduz cada caso com compromisso absoluto, cuidando dos seus interesses para que você tenha tranquilidade em cada etapa.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#475b6d]"
              >
                Com ampla atuação em <strong className="font-bold text-[#0b1e2e]">Direito Cível</strong>, <strong className="font-bold text-[#0b1e2e]">Criminal</strong>, <strong className="font-bold text-[#0b1e2e]">Trabalhista</strong>, <strong className="font-bold text-[#0b1e2e]">Família & Sucessões</strong> e <strong className="font-bold text-[#0b1e2e]">Previdenciário (INSS)</strong>, prestamos suporte jurídico tanto presencialmente na nossa sede no Centro de Nanuque quanto de maneira digital com tecnologia e segurança para clientes de qualquer localidade.
              </motion.p>

              {/* 3 Value Pillars */}
              <motion.div
                variants={reveal}
                className="mt-8 grid gap-4 sm:grid-cols-3"
              >
                <div className="rounded-xl border border-[#e6dfd3] bg-white p-4 shadow-xs">
                  <span className="text-[#9e751e]">
                    <HeartHandshake size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0b1e2e]">
                    Suporte & Acolhimento
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#475b6d]">
                    Atendimento atencioso que explica cada detalhe com clareza, tirando dúvidas e proporcionando total segurança.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6dfd3] bg-white p-4 shadow-xs">
                  <span className="text-[#9e751e]">
                    <Clock size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0b1e2e]">
                    Agilidade na Resolução
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#475b6d]">
                    Diligência imediata em delegacias, tribunais, juizados e cartórios, buscando soluções eficientes e respostas rápidas.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6dfd3] bg-white p-4 shadow-xs">
                  <span className="text-[#9e751e]">
                    <Shield size={20} />
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0b1e2e]">
                    Ética & Combate Firme
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#475b6d]">
                    Defesa técnica intransigente pautada no Código de Ética e na lealdade aos objetivos e direitos dos nossos clientes.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com a Dra. Giovana e equipe da Antunes & Martins sobre a minha demanda."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-sm"
                >
                  <WhatsAppIcon size={16} /> Falar com a Equipe
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação & Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#dfb135]/20 bg-[#0b1e2e] py-20 sm:py-28 lg:py-32"
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
                description="Expertise jurídica multidisciplinar com foco em Direito Cível, Criminal, Trabalhista, Família & Sucessões e Previdenciário (INSS)."
              >
                Soluções jurídicas estratégicas para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fad962] via-[#faecba] to-[#dfb135]">
                  você, sua família e sua empresa.
                </span>
              </Heading>
              <p className="max-w-[280px] pb-1 text-xs leading-6 text-[#c2d3e2]">
                Clique em uma das áreas abaixo para conferir as demandas atendidas e iniciar seu atendimento direto pelo WhatsApp com o escritório.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[340px] flex-col rounded-2xl border border-[#dfb135]/25 bg-[#0f273b] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fad962] hover:shadow-2xl hover:shadow-[#dfb135]/15 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-[#dfb135]/30 bg-[#14324a] text-[#fad962] shadow-xs transition-colors group-hover:border-[#fad962] group-hover:bg-[#dfb135] group-hover:text-[#071521]">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#dfb135]/40 transition-colors group-hover:text-[#fad962]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-block rounded-md border border-[#dfb135]/30 bg-[#14324a] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#faecba]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.28rem] font-bold leading-snug text-white">
                        {area.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-6 text-[#c2d3e2]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#fad962] hover:text-white cursor-pointer"
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

        {/* Por Que Escolher a Antunes & Martins - 4 Diferenciais Reais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#e6dfd3] bg-white py-20 text-[#0b1e2e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="REPUTAÇÃO MÁXIMA 5,0 ★ NO GOOGLE (39 AVALIAÇÕES)"
                description="Conhecimento técnico sólido, suporte atencioso ao cliente, agilidade nas decisões e ética intransigente em Nanuque e Minas Gerais."
              >
                Por que confiar a sua causa ao{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e751e] via-[#dfb135] to-[#c79a29]">
                  Escritório Antunes & Martins?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de consultar sobre o meu caso com a equipe Antunes & Martins Advocacia Especializada."
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
              <div className="flex flex-col rounded-2xl border border-[#e6dfd3] bg-[#f9f8f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#dfb135] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#dfb135]/30 bg-white text-[#9e751e] shadow-xs">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0b1e2e]">
                  Suporte Integral ao Cliente
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#475b6d]">
                  Cuidamos de cada detalhe da sua causa para que você tenha tranquilidade, sem a angústia de acompanhar burocracias sozinho.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#9e751e]">
                  &ldquo;Cuida dos seus interesses sem que você tenha que se preocupar&rdquo;
                </span>
              </div>

              {/* Pilar 2 */}
              <div className="flex flex-col rounded-2xl border border-[#e6dfd3] bg-[#f9f8f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#dfb135] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#dfb135]/30 bg-white text-[#9e751e] shadow-xs">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0b1e2e]">
                  Rico Conhecimento Jurídico
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#475b6d]">
                  Advogadas estudiosas, exemplares e capacitadas, aplicando estratégias modernas e fundamentadas nas decisões mais recentes dos tribunais.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#9e751e]">
                  &ldquo;Profissional exemplar, dedicada e com rico conhecimento&rdquo;
                </span>
              </div>

              {/* Pilar 3 */}
              <div className="flex flex-col rounded-2xl border border-[#e6dfd3] bg-[#f9f8f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#dfb135] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#dfb135]/30 bg-white text-[#9e751e] shadow-xs">
                  <Clock size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0b1e2e]">
                  Agilidade Comprovada
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#475b6d]">
                  Postura diligente perante órgãos públicos e juizados, destravando processos e trazendo soluções rápidas para os clientes.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#9e751e]">
                  &ldquo;Resolveu rapidamente, muito competente!&rdquo;
                </span>
              </div>

              {/* Pilar 4 */}
              <div className="flex flex-col rounded-2xl border border-[#e6dfd3] bg-[#f9f8f5] p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-[#dfb135] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#dfb135]/30 bg-white text-[#9e751e] shadow-xs">
                  <Scale size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0b1e2e]">
                  Reconhecimento em Nanuque
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#475b6d]">
                  Avaliada como a melhor advocacia da cidade, com clientes atendidos com sucesso em Nanuque, Teófilo Otoni, Betim e em todo o Brasil.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#9e751e]">
                  &ldquo;Melhor profissional da cidade · 5,0 Estrelas&rdquo;
                </span>
              </div>
            </div>

            {/* Como Funciona o Atendimento */}
            <div className="mt-16 rounded-2xl border border-[#e6dfd3] bg-[#f2efe8] p-8 sm:p-12">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e751e]">
                  PASSO A PASSO TRANSPARENTE & RESOLUTIVO
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#0b1e2e] sm:text-3xl">
                  Como funciona o nosso atendimento
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#475b6d]">
                  Sem burocracias confusas. Orientamos você com clareza desde o primeiro contato até a resolução da sua causa.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-[#e6dfd3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#dfb135]">
                    01
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0b1e2e]">
                    Contato Inicial no WhatsApp
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#475b6d]">
                    Você envia uma mensagem relatando sua necessidade (seja cível, criminal, trabalhista, família ou INSS). Nossa equipe atende prontamente.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6dfd3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#dfb135]">
                    02
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0b1e2e]">
                    Análise Criteriosa & Estratégia
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#475b6d]">
                    Avaliamos documentos, contratos, notificações ou o processo para traçar a linha de defesa ou ação judicial mais segura e favorável.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e6dfd3] bg-white p-6">
                  <span className="font-serif text-2xl font-bold text-[#dfb135]">
                    03
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#0b1e2e]">
                    Atuação Combativa & Acompanhamento
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#475b6d]">
                    Execução ágil de defesas e protocolos perante a Justiça e cartórios, mantendo você informado de cada andamento com tranquilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 39 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-[#dfb135]/20 bg-[#0b1e2e] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="PROVA SOCIAL & DEPOIMENTOS NO GOOGLE"
                description="Nota Máxima 5,0 ★ no Google Meu Negócio em Nanuque · MG, com 39 avaliações 100% positivas de quem confiou sua causa ao escritório."
              >
                O que dizem os clientes da{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fad962] via-[#faecba] to-[#dfb135]">
                  Antunes & Martins Advocacia
                </span>
              </Heading>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#dfb135]/30 bg-[#0f273b] px-5 py-3 text-xs font-bold text-white shadow-xs transition-all hover:border-[#fad962] hover:bg-[#14324a]"
              >
                <GoogleIcon size={18} />
                <span>Ver 39 avaliações no Google</span>
                <ArrowUpRight size={15} className="text-[#fad962]" />
              </a>
            </div>

            {/* Grid of Real Reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-2xl border border-[#dfb135]/20 bg-[#0f273b] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#fad962] hover:shadow-2xl hover:shadow-[#dfb135]/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#dfb135]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#dfb135] text-[#dfb135]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#dfb135]/25 bg-[#14324a] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#faecba]">
                        {review.badge}
                      </span>
                    </div>

                    {review.highlight && (
                      <p className="mt-3 text-xs font-bold text-[#fad962]">
                        {review.highlight}
                      </p>
                    )}

                    <p className="mt-3 text-xs leading-6 text-[#edf2f7]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#1a3e5c] pt-4">
                    <p className="font-serif text-sm font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#829bb0]">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Nanuque - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#e6dfd3] bg-white py-20 text-[#0b1e2e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO JURÍDICO"
                description="Converse diretamente com as advogadas da Antunes & Martins Advocacia Especializada. Oferecemos atendimento presencial na nossa sede no Centro de Nanuque e assessoria digital segura para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e751e] via-[#dfb135] to-[#c79a29]">
                  orientar você e proteger o seu direito.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento com a Antunes & Martins Advocacia Especializada."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <div className="text-xs text-[#475b6d] space-y-1">
                  <p>
                    WhatsApp Principal:{" "}
                    <strong className="text-[#0b1e2e]">{PHONE_DISPLAY}</strong>
                  </p>
                  <p>
                    Contato Adicional:{" "}
                    <strong className="text-[#0b1e2e]">{PHONE_SECONDARY_DISPLAY}</strong>
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#475b6d]">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-[#9e751e]" />
                  <div>
                    <p className="font-bold text-[#0b1e2e]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#2c3e50]">
                      Segunda a Sexta-feira · Abertura a partir das 08:00
                    </p>
                    <p className="text-[11px] font-semibold text-[#9e751e]">
                      Atendimento Presencial & Atendimento Online Nacional
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#9e751e]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-bold text-[#0b1e2e] transition-colors hover:text-[#9e751e]"
                  >
                    {PHONE_DISPLAY} / {PHONE_SECONDARY_DISPLAY}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#9e751e]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#2c3e50] transition-colors hover:text-[#9e751e]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#9e751e]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="font-medium text-[#2c3e50] transition-colors hover:text-[#9e751e]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#9e751e]" />
                  <span className="font-medium text-[#2c3e50]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#dfb135]/35 bg-[#f9f8f5] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#dfb135] to-[#fad962]" />

              <div className="flex items-center gap-4">
                <Image
                  src={LOGO_SRC}
                  alt="Antunes & Martins Advocacia Especializada"
                  width={380}
                  height={120}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div>

              <address className="mt-7 max-w-md text-sm not-italic leading-7 text-[#475b6d]">
                <strong className="font-bold text-[#0b1e2e]">
                  Antunes & Martins Advocacia Especializada
                </strong>
                <br />
                Dra. Giovana & Corpo Jurídico Especializado
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-[#e6dfd3] bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9e751e]">
                  Disponibilidade & Modalidades
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-[#475b6d]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-bold text-[#0b1e2e]">
                    Segunda a Sexta (Horário Comercial)
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right font-bold text-[#9e751e]">
                    Nanuque e Todo o Brasil via WhatsApp
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-[#0b1e2e]">Nanuque - MG</span>
                  <span>Áreas de Foco</span>
                  <span className="text-right text-[#0b1e2e]">Cível, Crime, Trabalho, Família, INSS</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e6dfd3]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#6e8294]">
                  Atendimento ético, confidencial e resolutivo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento com a Antunes & Martins Advocacia Especializada."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dfb135]/50 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9e751e] transition-colors hover:border-[#dfb135] hover:bg-[#fdf8eb] hover:text-[#0b1e2e]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Sovereign Petrol & Gold Metallic Banner */}
        <section className="border-t border-[#dfb135]/30 bg-gradient-to-r from-[#071521] via-[#0f273b] to-[#071521] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#faecba]">
                <Sparkles size={13} /> ANTUNES & MARTINS · ADVOCACIA ESPECIALIZADA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
                Precisa de segurança jurídica para sua causa cível, penal, trabalhista, familiar ou benefício do INSS?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de conversar com a equipe Antunes & Martins Advocacia Especializada."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#9e751e] via-[#dfb135] to-[#fad962] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#071521] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#14324a] bg-[#050f18] px-5 py-14 text-[#c2d3e2] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Antunes & Martins Advocacia Especializada"
                className="inline-flex items-center transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Antunes & Martins Advocacia Especializada"
                  width={320}
                  height={100}
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#c2d3e2]">
                ⚖️ Nossa missão é buscar justiça com ética e profissionalismo. Conheça mais sobre nosso trabalho e conte conosco para proteger seus direitos. Atuação especializada em Direito Cível, Criminal, Trabalhista, Família & Sucessões e Previdenciário (INSS). Nota Máxima 5,0 ★ no Google com 39 avaliações em Nanuque - MG.
              </p>
              <p className="mt-3 text-[11px] font-bold text-[#fad962]">
                Antunes & Martins Advocacia Especializada · Nanuque - MG
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fad962]">
                Navegação
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#c2d3e2]">
                <a className="footer-link font-medium hover:text-[#fad962]" href="#inicio">
                  Início
                </a>
                <a className="footer-link font-medium hover:text-[#fad962]" href="#sobre">
                  O Escritório & Equipe
                </a>
                <a className="footer-link font-medium hover:text-[#fad962]" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link font-medium hover:text-[#fad962]" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link font-medium hover:text-[#fad962]" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link font-medium hover:text-[#fad962]" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fad962]">
                Contato & Atendimento
              </h3>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#c2d3e2]">
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de falar com o escritório Antunes & Martins Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-bold text-[#fad962]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Phone size={15} className="shrink-0 text-[#fad962]" /> Telefone: {PHONE_DISPLAY} / {PHONE_SECONDARY_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <InstagramIcon size={15} className="shrink-0 text-[#fad962]" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2 font-medium"
                >
                  <Mail size={15} className="shrink-0 text-[#fad962]" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2 font-medium">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#fad962]" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] font-bold text-[#fad962]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · Abertura 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#14324a] pt-6 text-[10px] text-[#6e8294] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} ANTUNES & MARTINS ADVOCACIA ESPECIALIZADA. Todos os direitos reservados.
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
              "Olá! Gostaria de consultar sobre meus direitos com a Antunes & Martins Advocacia Especializada."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Antunes & Martins Advocacia"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0b1e2e] border border-[#dfb135]/40 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Antunes & Martins Advocacia
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#dfb135]/40 bg-[#0b1e2e] p-7 text-[#edf2f7] shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#dfb135]/30 bg-[#14324a] text-[#faecba] transition-colors hover:border-[#fad962] hover:bg-[#dfb135] hover:text-[#071521] cursor-pointer"
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

                <p className="mt-5 text-sm leading-7 text-[#c2d3e2]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#14324a] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#fad962]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-xs leading-5 text-[#edf2f7]"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#dfb135]" />
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
                    className="px-5 py-3 text-xs font-bold text-[#829bb0] transition-colors hover:text-white cursor-pointer"
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
