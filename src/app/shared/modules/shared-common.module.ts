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
import { AboutMeComponent } from '@app/profile/items/about-me/about-me.component';
import { ExperiencesComponent } from '@app/profile/items/experiences/experiences.component';
import { FormationsComponent } from '@app/profile/items/formations/formations.component';
import { ProjectsComponent } from '@app/profile/items/projects/projects.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		LoadingComponent,
    AboutMeComponent,
    ExperiencesComponent,
    FormationsComponent,
    ProjectsComponent,
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
    FormationsComponent,
    ProjectsComponent,
		ErrorMessageComponent,
	],
})
export class SharedCommonModule {}
