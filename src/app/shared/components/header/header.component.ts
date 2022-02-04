import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { AppMainComponent } from '@app/app.main.component';

@Component({
	selector: 'app-topbar',
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	items: MenuItem[];

	constructor(
		public appMain: AppMainComponent,

	) {}
}
