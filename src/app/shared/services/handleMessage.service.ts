import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromRoot from '@app/app.reducer';

import * as LOADING from '@shared/store/loading/loading.actions';
import * as MESSAGE from '@shared/store/message/message.actions';
import { Message } from '@shared/models/message.model';

import { MessageService } from 'primeng/api';

@Injectable({
	providedIn: 'root',
})
export class HandleMessageService {
	constructor(
		private store: Store<fromRoot.AppState>,
		private messageService: MessageService,
	) {}

	/**
	 * Função para receber os parâmetros do toast do primeNg e
	 * armazenar os dados na store (message.reducer)
	 * deslogar o usuário.
	 * @param severity severidade da mensagem (error, success, warn)
	 * @param summary Cabeçalho da mensagem
	 * @param detail Corpo da mensagem
	 * @param key Referência à mensagem no template
	 * @param sticky ????
	 *
	 */
	setMessage(
		severity: string,
		summary: string,
		detail: string,
		key?: string,
		sticky?: boolean,
	) {
		this.store.dispatch(
			MESSAGE.AddMessage({
				severity: severity,
				summary: summary,
				detail: detail,
				key: key,
				sticky: sticky,
			}),
		);
		this.store.dispatch(MESSAGE.RemoveMessage());
	}

	/**
	 * Função para receber os parâmetros do toast do primeNg e
	 * renderizar na tela a mensagem (<p-toast></p-toast>)
	 *
	 * @param message Objeto contendo os parâmetros padrão de mensagem do primeNg
	 *
	 */
	showMessage(message: Message) {
		this.messageService.clear();
		this.messageService.add({
			severity: message.severity,
			summary: message.summary,
			detail: message.detail,
			key: message.key,
			sticky: message.sticky,
		});
		this.delayedStopLoading();
	}

	delayedStopLoading() {
		setTimeout(() => {
			this.store.dispatch(LOADING.StopLoading());
		}, 500);
	}
}
