import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { PrimeModule } from '@shared/modules/prime.module';
import { TranslocoRootModule } from '@shared/modules/transloco-root.module';

import { AboutMeComponent } from '@app/profile/topics/about-me/about-me.component';
import { CertificationsComponent } from '@app/profile/topics/certifications/certifications.component';
import { ExperiencesComponent } from '@app/profile/topics/experiences/experiences.component';
import { FormationsComponent } from '@app/profile/topics/formations/formations.component';
import { PersonalComponent } from '@app/profile/topics/personal/personal.component';
import { SkillsComponent } from '@app/profile/topics/skills/skills.component';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		LoadingComponent,
    PersonalComponent,
		AboutMeComponent,
		ExperiencesComponent,
		CertificationsComponent,
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
    PersonalComponent,
		AboutMeComponent,
		ExperiencesComponent,
		CertificationsComponent,
		FormationsComponent,
		SkillsComponent,
		ErrorMessageComponent,
	],
})
export class SharedCommonModule {}
