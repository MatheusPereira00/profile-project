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

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		LoadingComponent,
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
		ErrorMessageComponent,
	],
})
export class SharedCommonModule {}
