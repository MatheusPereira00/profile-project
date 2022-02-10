import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslocoRootModule } from '@shared/modules/transloco-root.module';
import { PrimeModule } from '@shared/modules/prime.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

import { LoadingComponent } from '@shared/components/loading/loading.component';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { AboutMeComponent } from '@app/profile/topics/about-me/about-me.component';
import { ExperiencesComponent } from '@app/profile/topics/experiences/experiences.component';
import { FormationsComponent } from '@app/profile/topics/formations/formations.component';
import { SkillsComponent } from '@app/profile/topics/skills/skills.component';
import { CoursesComponent } from '@app/profile/topics/courses/courses.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		LoadingComponent,
    AboutMeComponent,
    ExperiencesComponent,
    CoursesComponent,
    FormationsComponent,
    SkillsComponent,
		ErrorMessageComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		PrimeModule,
		TranslocoRootModule,
	],

	exports: [
		HeaderComponent,
		FooterComponent,
		LoadingComponent,
    AboutMeComponent,
    ExperiencesComponent,
    CoursesComponent,
    FormationsComponent,
    SkillsComponent,
		ErrorMessageComponent,
	],
})
export class SharedCommonModule {}
