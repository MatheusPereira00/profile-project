import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { PrimeModule } from '@shared/modules/prime.module';

import { AboutMeComponent } from '@app/profile/topics/about-me/about-me.component';
import { ExperiencesComponent } from '@app/profile/topics/experiences/experiences.component';
import { FormationsComponent } from '@app/profile/topics/formations/formations.component';
import { PersonalComponent } from '@app/profile/topics/personal/personal.component';
import { SkillsComponent } from '@app/profile/topics/skills/skills.component';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  PersonalComponent,
  AboutMeComponent,
  ExperiencesComponent,
  FormationsComponent,
  SkillsComponent,
  ErrorMessageComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, PrimeModule],
  exports: [...COMPONENTS],
})
export class SharedCommonModule {}
