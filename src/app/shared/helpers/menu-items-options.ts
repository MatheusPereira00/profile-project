import { MenuItems } from '../models/menu-items.model';

export const menuItems: MenuItems[] = [
	{
		label: 'Currículo',
		items: [
			{
				label: 'Início',
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
				label: 'Cursos',
				icon: 'pi pi-book',
				routerLink: ['cv', 'cursos'],
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
				url: ['https://www.linkedin.com/in/lucassacramoni/'],
				target: '_blank',
			},
			{
				label: 'Facebook',
				icon: 'pi pi-facebook',
				url: ['https://www.facebook.com/lucassacramoni/'],
				target: '_blank',
			},
			{
				label: 'Instagram',
				icon: 'pi pi-instagram',
				url: ['https://www.instagram.com/lucas.speixoto/'],
				target: '_blank',
			},
			{
				label: 'GitHub',
				icon: 'pi pi-github',
				url: ['https://github.com/lucasspeixoto'],
				target: '_blank',
			},
			{
				label: 'WhatsApp',
				icon: 'pi pi-whatsapp',
				url: [
					'https://api.whatsapp.com/send?phone=5519982621117&text=Ol%C3%A1%21+Lucas, tudo bem ?&lang=pt_pt',
				],
				target: '_blank',
			},
		],
	},
];
