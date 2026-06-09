export const languages = {
  pt: 'PT',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  pt: {
    'nav.label': 'Navegação principal',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.about.href': '#sobre',
    'nav.projects.href': '#projetos',
    'nav.contact.href': '#contato',
    'nav.lang.label': 'Mudar para inglês',
    'nav.lang.href': '/en/',
    'nav.lang.code': 'EN',
    'hero.greeting': 'Olá, meu nome é',
    'hero.subtitle': 'Desenvolvedor & Analista de TI',
    'hero.description':
      'Construo e mantenho sistemas web com PHP e Laravel, unindo desenvolvimento e infraestrutura para entregar soluções que funcionam no mundo real.',
    'hero.cta': 'Ver projetos →',
    'hero.cta.href': '#projetos',
    'hero.github.label': 'GitHub de Natanael Cirino',
    'hero.linkedin.label': 'LinkedIn de Natanael Cirino',
    'hero.email.label': 'Enviar e-mail para Natanael Cirino',
    'about.title': 'Sobre',
    'about.p1':
      'Minha experiência profissional foi forjada no Exército Brasileiro, na equipe de TI da Escola de Sargentos das Armas (ESA), cuidando do ciclo completo da tecnologia: do desenvolvimento de sistemas à infraestrutura que mantém tudo funcionando.',
    'about.p2':
      'Essa vivência inclui desenvolvimento de funcionalidades em Laravel para sistemas internos de gestão, manutenção da intranet institucional e administração do ambiente de rede: Active Directory e GPOs, monitoramento com Zabbix, central de serviços com GLPI e segurança de endpoints. Uma combinação que me deu uma visão que poucos desenvolvedores têm: escrevo código entendendo o ambiente onde ele roda.',
    'about.p3':
      'Curso Ciência da Computação e sigo estudando continuamente. Meu objetivo é crescer como desenvolvedor full stack sem abrir mão da bagagem de infraestrutura que construí na prática.',
    'about.tech.title': 'Tecnologias que uso no dia a dia',
    'projects.title': 'Projetos',
    'projects.github.label': 'Ver código no GitHub',
    'projects.demo.label': 'Ver demonstração ao vivo',
    'contact.title': 'Vamos conversar?',
    'contact.description':
      'Estou aberto a novas oportunidades e bons desafios. Se quiser trocar uma ideia sobre um projeto, uma vaga ou tecnologia, minha caixa de entrada está aberta.',
    'contact.cta': 'Diga olá →',
    'footer.credit': 'Projetado e construído por Natanael Cirino',
  },
  en: {
    'nav.label': 'Main navigation',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.about.href': '#about',
    'nav.projects.href': '#projects',
    'nav.contact.href': '#contact',
    'nav.lang.label': 'Switch to Portuguese',
    'nav.lang.href': '/',
    'nav.lang.code': 'PT',
    'hero.greeting': 'Hi, my name is',
    'hero.subtitle': 'Developer & IT Analyst',
    'hero.description':
      'I build and maintain web systems using PHP and Laravel, bridging development and infrastructure to deliver solutions that work in the real world.',
    'hero.cta': 'View projects →',
    'hero.cta.href': '#projects',
    'hero.github.label': "Natanael Cirino's GitHub",
    'hero.linkedin.label': "Natanael Cirino's LinkedIn",
    'hero.email.label': 'Send email to Natanael Cirino',
    'about.title': 'About',
    'about.p1':
      'My professional experience was forged in the Brazilian Army, on the IT team of the Escola de Sargentos das Armas (ESA), handling the full technology lifecycle: from building internal systems to keeping the infrastructure running.',
    'about.p2':
      'That experience includes developing Laravel features for internal management systems, maintaining the institutional intranet, and managing the network environment: Active Directory and GPOs, monitoring with Zabbix, service desk with GLPI, and endpoint security. A combination that gave me a perspective few developers have: I write code with a clear understanding of the infrastructure it runs on.',
    'about.p3':
      "I'm pursuing a Computer Science degree and keep learning continuously. My goal is to grow as a full-stack developer without leaving behind the infrastructure knowledge I've built through hands-on experience.",
    'about.tech.title': 'Technologies I work with daily',
    'projects.title': 'Projects',
    'projects.github.label': 'View source on GitHub',
    'projects.demo.label': 'View live demo',
    'contact.title': "Let's talk?",
    'contact.description':
      "I'm open to new opportunities and good challenges. Whether you want to discuss a project, a role, or just geek out about tech, my inbox is always open.",
    'contact.cta': 'Say hello →',
    'footer.credit': 'Designed & built by Natanael Cirino',
  },
} as const;

export type UIKey = keyof typeof ui['pt'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}
