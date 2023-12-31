import { MenuItems } from '../models/menu-items.model';

export const menuItems: MenuItems[] = [
  {
    label: 'Currículo',
    items: [
      {
        label: 'Apresentação',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Sobre Mim',
        icon: 'pi pi-user',
        routerLink: ['cv', 'sobre-min'],
      },
      {
        label: 'Experiências Profissionais',
        icon: 'pi pi-id-card',
        routerLink: ['cv', 'experiencias'],
      },
      {
        label: 'Formações',
        icon: 'pi pi-home',
        routerLink: ['cv', 'formacoes'],
      },
      {
        label: 'Competências e Habilidades',
        icon: 'pi pi-list',
        routerLink: ['cv', 'competencias'],
      },
    ],
  },
  {
    label: 'Contatos',
    items: [
      {
        label: 'Linkedin',
        icon: 'pi pi-linkedin',
        url: ['https://www.linkedin.com/in/matheuspereira00/'],
        target: '_blank',
      },
      {
        label: 'GitHub',
        icon: 'pi pi-github',
        url: ['https://github.com/MatheusPereira00'],
        target: '_blank',
      },
    ],
  },
];
