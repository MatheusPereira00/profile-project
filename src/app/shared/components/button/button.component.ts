import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	template: `
		<div class="p-d-flex p-jc-end">
			<button
				pButton
				(click)="saveItem($event)"
				[disabled]="isDisabled"
			></button>
		</div>
	`,
	styles: [``],
})
export class ButtonComponent {
	//* Classe do botão
	@Input('class') public class: string;

	//* Icon
	@Input('icon') public icon: string;

	// * Label do botão
	@Input('label') label: string;

	// * Controle de habilitação do botão
	@Input('disabled') isDisabled: boolean;

	@Input('pTooltip') pTooltip?: string;

	// * Emissão de evento do click para adicionar item
	@Output() eventOutput = new EventEmitter();

	saveItem(event: Event) {
		this.eventOutput.emit(event);
	}
}
