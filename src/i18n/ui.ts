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
  },
} as const;

export type UIKey = keyof typeof ui['pt'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}
