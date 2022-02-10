import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonalComponent } from './profile/personal/personal.component';
import { AppMainComponent } from './app.main.component';
import { AboutMeComponent } from './profile/items/about-me/about-me.component';
import { ExperiencesComponent } from './profile/items/experiences/experiences.component';
import { FormationsComponent } from './profile/items/formations/formations.component';
import { ProjectsComponent } from './profile/items/projects/projects.component';

@NgModule({
	imports: [
		RouterModule.forRoot(
			[
				{
					path: '',
					component: AppMainComponent,
					children: [
						{
							path: '',
							component: PersonalComponent,
						},

						{
							path: 'cv/sobre-min',
							component: AboutMeComponent,
						},
						{
							path: 'cv/experiencias',
							component: ExperiencesComponent,
						},
						{
							path: 'cv/formacao',
							component: FormationsComponent,
						},
						{
							path: 'cv/projetos',
							component: ProjectsComponent,
						},
					],
				},

				{ path: '**', redirectTo: '' },
			],
			{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' },
		),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
