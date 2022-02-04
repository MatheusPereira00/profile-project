import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-error',
	template: `
		<div class="block text-900 text-xl font-medium mb-2">
			<i class="pi pi-exclamation-circle invalid-label"></i>
			<label class="mr-1 invalid-label">{{ message }}</label>
		</div>
	`,
	styles: [``],
})
export class ErrorMessageComponent {
	@Input('message') message: string;

	constructor() {}
}
