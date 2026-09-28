import { calculateAge } from "/assets/utils/calculateAge.js";
export const personalInfo = {
  birthDate: "1999-08-21", // coloque sua data real
};
export const facts = [
  {
    label: "Local",
    value: "Porto Alegre - RS",
  },
  { label: "Cargo", value: "Desenvolvedora Front-end" },
  {
    label: "Foco",
    value: "Experiencia do usuario e arquitetura e mentoria de talentos",
  },
  { label: "Idade", value: `${calculateAge(personalInfo.birthDate)} anos` },
];

export const hobbies = ["Leitura", "Pets", "Música", "Jiu-jitsu"];

export const education = [
  {
    name: "Análise e Desenvolvimento de Sistemas",
    place: "UNINTER",
    year: "2022 — atual",
  },
];

export const languages = ["Português · nativo", "Inglês · avançado"];

export const projects = [
  {
    name: "Modernização de Sistemas Corporativos - Dell Technologies",
    desc: "Modernização de interfaces internas com Angular, TypeScript e Material UI, com foco em usabilidade, acessibilidade e responsividade. Criação de mais de 14 componentes reutilizáveis. Refatoração de sistemas legados utilizando o Dell Design System para padronização das interfaces.",
    stack: ["Angular", "TypeScript", "Material UI", "Dell Design System"],
    nda: true,
  },
  {
    name: "Desenvolvimento Full Stack — Drumwave",
    desc: "Atuação no desenvolvimento full stack do projeto da Drumwave, utilizando React, Tailwind, PrimeReact, Context API, NestJS e Axios. Contribuição para a entrega de um portal de dados escalável, com foco em alta performance, usabilidade e experiência do usuário.",
    stack: [
      "NestJS",
      "Prisma",
      "Jest",
      "Context API",
      "Tailwind",
      "Axios",
      "PrimeReact",
    ],
    nda: true,
  },
  {
    name: "Frontend para Soluções com Agentes de IA - Dell Technologies",
    desc: "Desenvolvimento de frontend para uma solução baseada em agentes de inteligência artificial, criando a interface de interação entre usuários e agentes e integrando os fluxos conversacionais à aplicação.",
    stack: ["React", "IA Generativa", "TypeScript"],
    nda: true,
  },
  {
    name: "Mentoria e Desenvolvimento de Pessoas",
    desc: "Atuação como mentora nos programas de estágio de verão e de inverno, apoiando o desenvolvimento técnico e profissional de estudantes e profissionais em início de carreira. Participação voluntária em palestras e iniciativas internas de compartilhamento de conhecimento, promovendo o aprendizado e a disseminação de boas práticas de desenvolvimento.",
    stack: [
      "Mentoria",
      "Liderança Técnica",
      "Ensino",
      "Desenvolvimento de Pessoas",
      "Palestras",
    ],
    links: [
      {
        label: "Estágio de verão",
        url: "https://www.linkedin.com/posts/instituto-de-pesquisas-eldorado_est%C3%A1gio-de-ver%C3%A3o-2026-activity-7415452655004811264-BD20?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-iwgEBpRbRKy43tdVe_77mSbVXHZyUMeM",
      },
      {
        label: "Elas no Eld",
        url: "https://www.linkedin.com/posts/instituto-de-pesquisas-eldorado_5%C2%AA-edi%C3%A7%C3%A3o-elas-no-eld-activity-7491226094424154112-8YDS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-iwgEBpRbRKy43tdVe_77mSbVXHZyUMeM",
      },
      {
        label: "Palestras",
        url: "https://lnkd.in/p/dfmU5iUd",
      },
    ],

    nda: false,
  },
];

export const stack = [
  "JavaScript",
  "React",
  "Node.js",
  "AI tools",
  "Angular",
  "SPA",
  "Tailwind",
  "Git",
];

export const certifications = [
  {
    name: "Certificado oficial EF SET 57/100 (B2 Upper Intermediate)",
    issuer: "EF Standard English Test (EF SET) ",
    year: "2024",
    url: "https://cert.efset.org/m6TuhS",
  },
];
