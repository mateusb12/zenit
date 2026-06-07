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
    label: "anos de experiência",
  },
  {
    value: "10k+",
    label: "horas de atuação",
  },
  {
    value: "100%",
    label: "atendimento digital",
  },
  {
    value: "4",
    label: "etapas de implantação",
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
    title: "Documentos dispersos",
    description:
      "Procedimentos, planilhas e registros ficam espalhados em pastas, e-mails e conversas.",
  },
  {
    title: "Gestão informal",
    description:
      "As rotinas acontecem, mas sem padrão claro, responsável definido ou rastreabilidade.",
  },
  {
    title: "Falta de evidências",
    description:
      "A empresa até executa atividades, mas não consegue comprovar de forma organizada.",
  },
  {
    title: "Risco em auditoria",
    description:
      "Na hora de comprovar integridade, PBQP-H ou ISO 9001, as lacunas aparecem tarde demais.",
  },
];

export const solutions: Solution[] = [
  {
    number: "01",
    title: "Programa de Integridade para Licitações",
    description:
      "Políticas, matriz de riscos, canal de integridade, controles, registros e evidências para empresas que precisam demonstrar compliance.",
    tags: ["Integridade", "Compliance", "CGU", "Licitações"],
  },
  {
    number: "02",
    title: "PBQP-H Nível B para Construção Civil",
    description:
      "Implantação enxuta de processos, procedimentos, registros de obra, controle documental e plano de ação para construtoras.",
    tags: ["PBQP-H", "Obras", "Processos", "Evidências"],
  },
  {
    number: "03",
    title: "ISO 9001 para Empresas em Geral",
    description:
      "Organização da gestão da qualidade com responsabilidades, indicadores, auditoria interna, tratamento de não conformidades e melhoria contínua.",
    tags: ["ISO 9001", "SGQ", "Auditoria", "Qualidade"],
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
      "Leitura inicial da empresa, requisitos aplicáveis, urgências, riscos e nível de maturidade.",
  },
  {
    step: "02",
    title: "Estruturação",
    description:
      "Definição de processos, documentos, controles, responsáveis e plano de ação.",
  },
  {
    step: "03",
    title: "Implantação",
    description:
      "Acompanhamento digital, reuniões objetivas, materiais didáticos e treinamento da equipe quando necessário.",
  },
  {
    step: "04",
    title: "Evidências e verificação",
    description:
      "Organização de registros, revisão de lacunas e preparação para auditoria, certificação ou licitação.",
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
