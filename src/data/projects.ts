import type { Lang } from '../i18n/ui';

export interface Project {
  title: string | Record<Lang, string>;
  description: Record<Lang, string>;
  tags: string[];
  github?: string;
  demo?: string;
  badge?: Record<Lang, string>;
  wip?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Atalaia',
    badge: {
      pt: 'Projeto interno · código privado',
      en: 'Internal project · private code',
    },
    description: {
      pt: 'Sistema de gestão de pessoal de uma instituição de ensino do Exército Brasileiro. Atuação no desenvolvimento de funcionalidades em Laravel, reestruturação de formulários complexos e colaboração via branches, pull requests e code review.',
      en: 'Personnel management system for a Brazilian Army educational institution. Involved building new Laravel features, restructuring complex forms, and collaborating through branches, pull requests, and code review.',
    },
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Git'],
  },
  {
    title: { pt: 'Este portfólio', en: 'This portfolio' },
    description: {
      pt: 'Site bilíngue construído com Astro e Tailwind CSS, com foco em performance, acessibilidade e animações sutis. Tipografia e identidade visual próprias, i18n estruturado e deploy contínuo.',
      en: 'Bilingual site built with Astro and Tailwind CSS, focused on performance, accessibility, and subtle animations. Custom typography and visual identity, structured i18n, and continuous deployment.',
    },
    tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/natanael1cirino/portfolio',
  },
  {
    title: { pt: 'Em construção', en: 'In progress' },
    description: {
      pt: 'Gestor de finanças pessoais e investimentos em Laravel, com integração a dados reais de fundos imobiliários. Próximo projeto deste portfólio.',
      en: 'A personal finance and investment manager built in Laravel, with real-data integration for Brazilian real estate funds. The next project on this portfolio.',
    },
    tags: ['Laravel', 'Livewire', 'MySQL'],
    wip: true,
  },
];
