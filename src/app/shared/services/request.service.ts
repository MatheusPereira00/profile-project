import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpErrorResponse,
	HttpResponse,
} from '@angular/common/http';

import { TranslocoService } from '@ngneat/transloco';

import { Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromApp from '@app/app.reducer';

import * as LOADING from '@shared/store/loading/loading.actions';
import { ErrorMessage } from '@shared/models/error.model';
import { HandleMessageService } from '@shared/services/handleMessage.service';
import { SuccessMessage } from '@shared/models/success.model';

import { environment } from '@envs/environment';

/**
 * Representa um 'service' genérico para operações de crud, que vai ter o
 * auxilio de um Subject para emitir true caso a requisição ocorra com sucesso
 * e false caso ocorra erro.
 *
 * @class RequestService
 */
@Injectable({
	providedIn: 'root',
})
export class RequestService<Request, Return> {
	private resultSubject = new Subject<boolean>();
	result$: Observable<boolean> = this.resultSubject.asObservable();

	private postDataSubject = new Subject<Return>();
	postData$: Observable<Return> = this.postDataSubject.asObservable();

	private putDataSubject = new Subject<Return>();
	putData$: Observable<Return> = this.putDataSubject.asObservable();

	private controlSubject = new Subject<boolean>();
	control$: Observable<boolean> = this.controlSubject.asObservable();

	apiUrl: string = environment.API_URL;

	constructor(
		private handleMessageService: HandleMessageService,
		private store: Store<fromApp.AppState>,
		private transloco: TranslocoService,
		private httpClient: HttpClient,
	) {}

	/**
	 * Função genérica para requisições get
	 *
	 * @param endpoint endpoint da requisição.
	 *
	 * @return Observable de tipo pré definido (Request)
	 *
	 */
	requestGetData(endpoint: string): Observable<Request> {
		return this.httpClient.get<Request>(`${this.apiUrl}/${endpoint}`);
	}

	/**
	 * Função genérica para requisições post que se inscreve e dispara o retorno
	 * da requisição em casos de sucesso ou o erro em casos de erro
	 *
	 * @param item Objeto enviado no body da requisiçõe e de tipo pré definido (Request).
	 *
	 * @param endpoint endpoint da requisição.
	 *
	 */
	requestPostData(item: Request, endpoint: string) {
		this.store.dispatch(LOADING.StartLoading());
		this.httpClient
			.post(`${this.apiUrl}/${endpoint}`, item, {
				observe: 'response',
			})
			.pipe(takeUntil(this.control$))
			.subscribe(
				(response: HttpResponse<Return>) => {
					this.postDataSubject.next(response.body);
					this.store.dispatch(LOADING.StopLoading());
				},
				(error: HttpErrorResponse) =>
					this.errorRequestHandler(error.error.error),
			);
	}

	/**
	 * Função genérica para requisições put que se inscreve e dispara o retorno
	 * da requisição em casos de sucesso ou o erro em casos de erro
	 *
	 * @param item Objeto enviado no body da requisiçõe e de tipo pré definido (Request).
	 *
	 * @param endpoint endpoint da requisição.
	 *
	 */
	requestPutData(item: Request, endpoint: string) {
		this.store.dispatch(LOADING.StartLoading());
		this.httpClient
			.put(`${this.apiUrl}/${endpoint}`, item, {
				observe: 'response',
			})
			.pipe(takeUntil(this.control$))
			.subscribe(
				(response: HttpResponse<Return>) => {
					if (response) {
						this.putDataSubject.next(response.body);
						this.store.dispatch(LOADING.StopLoading());
					}
				},
				(error: HttpErrorResponse) => {
					this.errorRequestHandler(error.error.error);
				},
			);
	}

	/**
	 * Função para retornar um objeto com as referencias para os observables
	 * de post, put e delete utilizados nas requisições de crud
	 *
	 * @param item Objeto passado no body da requisição.
	 * @param endpoint Endpoint configurado para a requisição.
	 *
	 * @return Um objeto com os observables alvos referenciados pelo tipo de
	 * requisição (post, put, delete).
	 */
	setRequestTargetsOptions(item: Request, endpoint: string) {
		return {
			post: this.httpClient.post(`${this.apiUrl}/${endpoint}`, item, {
				observe: 'response',
			}),
			put: this.httpClient.put(`${this.apiUrl}/${endpoint}`, item, {
				observe: 'response',
			}),
			delete: this.httpClient.request('delete', `${this.apiUrl}/${endpoint}`, {
				body: item,
				observe: 'response',
			}),
		};
	}

	/**
	 * Função genérica para requisições http de operações de crud sem
	 * a necessidade de acesso ao body da requisição.
	 *
	 * @param item Objeto passado no body da requisição.
	 * @param type Tipo de requisição solicitada (get, post, put ou delete).
	 * @param endpoint Endpoint configurado para a requisição.
	 *
	 * @return Um `Observable` da resposta com um objeto variado dentro do body.
	 */
	request(item: Request, type: string, endpoint: string) {
		this.store.dispatch(LOADING.StartLoading());

		const requestTarget$ = this.setRequestTargetsOptions(item, endpoint)[type];

		requestTarget$.pipe(takeUntil(this.control$)).subscribe(
			(data: HttpResponse<SuccessMessage>) => {
				this.successRequestHandler(data.body);
			},
			(error: HttpErrorResponse) => {
				this.errorRequestHandler(error.error.error);
			},
		);
	}

	/**
	 * Função genérica para exibição de mensagem de sucesso
	 *
	 * @param data Objeto retornado da requisição com sucesso.
	 *
	 */
	successRequestHandler(body: SuccessMessage) {
		this.resultSubject.next(true);
		const { detail, summary } = body.sucess.msg;
		this.handleMessageService.setMessage(
			'success',
			this.transloco.translate(summary),
			this.transloco.translate(detail),
		);
	}

	/**
	 * Função genérica para exibição de mensagem de erro
	 *
	 * @param error Objeto retornado da requisição com erro.
	 *
	 */
	errorRequestHandler(error: ErrorMessage) {
		this.resultSubject.next(false);
		if (error?.msg) {
			const { detail, summary } = error.msg;
			this.handleMessageService.setMessage(
				'error',
				this.transloco.translate(summary),
				this.transloco.translate(detail),
			);
		} else {
			this.handleMessageService.setMessage(
				'error',
				'Erro desconhecido',
				'Ocorreu um error desconhecido. Por favor tente novamente ou entre em contato com algum administrador.',
			);
		}
	}

	/**
	 * Função para unsubscribe do observable de controle (control$)
	 *
	 */
	unsubscribes() {
		this.controlSubject.next(false);
		this.controlSubject.complete();
	}
}
