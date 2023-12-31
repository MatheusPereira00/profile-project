import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonalComponent } from './profile/topics/personal/personal.component';
import { AppMainComponent } from './app.main.component';
import { AboutMeComponent } from './profile/topics/about-me/about-me.component';
import { ExperiencesComponent } from './profile/topics/experiences/experiences.component';
import { FormationsComponent } from './profile/topics/formations/formations.component';
import { SkillsComponent } from './profile/topics/skills/skills.component';

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
              path: 'cv/formacoes',
              component: FormationsComponent,
            },
            {
              path: 'cv/competencias',
              component: SkillsComponent,
            },
          ],
        },

        { path: '**', redirectTo: '' },
      ],
      { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
