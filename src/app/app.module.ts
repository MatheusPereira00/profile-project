import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { reducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AppConfigComponent } from './app.config.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';

import { PrimeModule } from '@shared/modules/prime.module';
import { TranslocoRootModule } from '@shared/modules/transloco-root.module';
import { SharedCommonModule } from '@shared/modules/shared-common.module';

import { CommonServices } from '@app/shared/services/common.service';
import { ConfigService } from '@config/services/app.config.service';
import { MenuService } from '@config/services/app.menu.service';
import { environment } from '@envs/environment';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		TranslocoRootModule,
		SharedCommonModule,
		PrimeModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		StoreRouterConnectingModule.forRoot({
			stateKey: 'router',
			routerState: RouterState.Minimal,
		}),
	],
	declarations: [
		AppComponent,
		AppMainComponent,
		AppConfigComponent,
		AppMenuComponent,
		AppMenuitemComponent,
	],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		CommonServices,
		ConfigService,
		MenuService,

		{ provide: LOCALE_ID, useValue: 'pt-BR' },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
