import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
	providedIn: 'root',
})
export class LanguagesService {
	language: string;

	constructor(public transloco: TranslocoService) {}

	/**
	 * Função para retornar o idioma ativo
	 * e chamar a função getActiveLanguage para retornar o idioma
	 * selecionado
	 *
	 * @return this.transloco.getActiveLang()
	 *
	 */
	getActiveLanguage() {
		return this.transloco.getActiveLang();
	}

	/**
	 * Função setar o idioma ativo via busca do localStorage
	 * e setar português como padrão caso não exita idioma
	 * ainda definido.
	 *
	 */
	getSelectLanguage() {
		let language = localStorage.getItem('@lspeixoto:language');
		if (language) {
			if (
				language === null ||
				language === undefined ||
				language == 'undefined'
			) {
				this.transloco.setActiveLang('pt-br');
				localStorage.setItem('@lspeixoto:language', 'pt-br');
			} else {
				this.transloco.setActiveLang(language);
			}
		} else {
			localStorage.setItem('@lspeixoto:language', 'pt-br');
		}
		this.transloco.getActiveLang();
	}

	/**
	 * Função para setar o idioma ativo com base na opção selecionada
	 * e chamar a função getActiveLanguage para retornar o idioma
	 * selecionado
	 *
	 * @param language String de tradução ('pt-br', 'en-us' ou 'en-en')
	 *
	 */
	setLanguage(language: string) {
		this.transloco.setActiveLang(language);
		this.setLanguageSelected(language);
		this.getActiveLanguage();
	}

	/**
	 * Função para setar o idioma português na chamada da
	 * função setLanguage
	 *
	 */
	setLanguageBr() {
		this.setLanguage('pt-br');
	}

	/**
	 * Função para setar o idioma Inglês na chamada da
	 * função setLanguage
	 *
	 */
	setLanguageEn() {
		this.setLanguage('en-us');
	}

	/**
	 * Função para setar o idioma Espanhol na chamada da
	 * função setLanguage
	 *
	 */
	setLanguageEs() {
		this.setLanguage('es-es');
	}

	/**
	 * Função para setar o idioma selecionado no localStorage
	 *
	 */
	setLanguageSelected(language: string) {
		localStorage.setItem('@lspeixoto:language', language);
	}
}
