export type NavItem = {
  href: string;
  label: string;
};

export type AuthorityItem = {
  value: string;
  label: string;
};

export type Challenge = {
  title: string;
  description: string;
  icon: string;
};

export type Solution = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export type Segment = string;

export type MethodStep = {
  step: string;
  title: string;
  description: string;
};

export const whatsappHref =
  "https://wa.me/5585999999999?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Z%C3%8ANIT%20e%20quero%20tirar%20uma%20d%C3%BAvida%20sobre%20consultoria%20digital%2C%20PBQP-H%2C%20ISO%209001%20ou%20Programa%20de%20Integridade.";

export const navItems: NavItem[] = [
  { href: "#inicio", label: "Início" },
  { href: "#desafios", label: "Desafios" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#diagnostico", label: "Diagnóstico" },
];

export const authorityItems: AuthorityItem[] = [
  {
    value: "15+",
    label: "anos de experiência técnica",
  },
  {
    value: "+10k",
    label: "horas em consultorias e diagnósticos",
  },
  {
    value: "+5k",
    label: "horas em auditorias",
  },
];

export const heroProofItems = [
  "Programa de Integridade",
  "PBQP-H Nível B",
  "ISO 9001",
];

export const heroPanelSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Leitura inicial da maturidade e dos riscos",
    action: "priorizar",
  },
  {
    number: "02",
    title: "Estrutura",
    description: "Processos, documentos e responsáveis",
    action: "organizar",
  },
  {
    number: "03",
    title: "Evidências",
    description: "Registros para auditoria, licitação e gestão",
    action: "provar",
  },
];

export const challenges: Challenge[] = [
  {
    title: "Informações fora de controle",
    icon: "challenge-info-control-neon.png",
    description:
      "Procedimentos, registros e evidências existem, mas ficam em locais diferentes, sem padrão claro de controle, versão ou responsável.",
  },
  {
    title: "Gestão na cabeça das pessoas",
    icon: "challenge-knowledge-head-neon.png",
    description:
      "A rotina funciona porque alguém sabe fazer, não porque existe um padrão claro, registrado e acompanhado.",
  },
  {
    title: "Registros que não convencem",
    icon: "challenge-evidence-check-neon.png",
    description:
      "A empresa executa atividades, mas não consegue comprovar de forma rápida, organizada e confiável.",
  },
  {
    title: "Gaps descobertos tarde demais",
    icon: "challenge-risk-neon.png",
    description:
      "As falhas aparecem quando o auditor, o edital ou o cliente já está exigindo comprovação.",
  },
];

export const solutions: Solution[] = [
  {
    number: "01",
    title: "ISO 9001 para sair da gestão informal",
    description:
      "Para empresas que precisam mapear processos, padronizar rotinas, definir responsáveis, acompanhar indicadores e identificar desvios antes que virem retrabalho.",
    tags: ["ISO 9001", "Processos", "Indicadores", "Melhoria"],
  },
  {
    number: "02",
    title: "Programa de Integridade para Licitações e Contratos",
    description:
      "Para empresas que precisam estruturar regras, controles, canal, treinamentos e registros para participar de licitações, atender exigências contratuais e reduzir riscos de integridade.",
    tags: ["Integridade", "Compliance", "Licitações", "Contratos"],
  },
  {
    number: "03",
    title: "PBQP-H Nível B para Construtoras",
    description:
      "Para construtoras que precisam atender exigências do mercado, acessar oportunidades de financiamento e organizar processos, registros e evidências do sistema da qualidade.",
    tags: ["PBQP-H", "Construção civil"],
  },
];

export const segments: Segment[] = [
  "Construção civil",
  "Indústria",
  "Logística",
  "Energia/eólica",
  "Guindastes",
  "Alimentos",
  "Serviços",
  "Outros segmentos",
];

export const methodSteps: MethodStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Leitura inicial da empresa, documentos, processos e principais gaps.",
  },
  {
    step: "02",
    title: "Planejamento",
    description:
      "Definição das prioridades, responsáveis, prazos e próximos passos.",
  },
  {
    step: "03",
    title: "Implantação",
    description:
      "Organização dos documentos, registros, controles e evidências.",
  },
  {
    step: "04",
    title: "Evidências e Verificação",
    description:
      "Conferência do que foi implantado e preparação para auditoria, certificação ou licitação.",
  },
];


export const diagnosticFacts = [
  ["Base", "Fortaleza · Ceará"],
  ["Atendimento", "Digital, remoto e consultivo"],
  ["Foco", "Integridade, PBQP-H, ISO 9001, auditoria e gestão auditável"],
];

export const segmentOptions = [
  "Construção civil",
  "Empresa que participa de licitações",
  "Serviços",
  "Indústria",
  "Logística",
  "Energia/eólica",
  "Outro",
];

export const needOptions = [
  "Programa de Integridade e Compliance",
  "PBQP-H",
  "ISO 9001",
  "Auditoria interna",
  "Treinamento dentro da implantação",
  "Soluções digitais sob demanda",
  "Ainda não sei",
];
