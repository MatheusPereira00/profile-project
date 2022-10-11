import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { AppMainComponent } from '@app/app.main.component';
import { LanguagesService } from '@app/shared/services/languages.service';

@Component({
	selector: 'app-topbar',
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
	items: MenuItem[];

	activeLanguage: string;

	constructor(
		public appMain: AppMainComponent,
		public languages: LanguagesService,
	) {}

	ngOnInit() {
		this.updateLanguage();
	}

	updateLanguage() {
		this.activeLanguage = this.languages.getActiveLanguage();
	}
}
