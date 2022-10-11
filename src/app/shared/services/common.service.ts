import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

import { Select } from '../models/select.model';

@Injectable({
	providedIn: 'root',
})
export class CommonServices {
	constructor(private transloco: TranslocoService) {}

	//* Função que valida o email cadastrado
	validEmail(form: UntypedFormGroup): boolean {
		const field = form.controls.email;
		let validation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(
			field.value,
		);
		if (field.touched && !validation && field.value) {
			return true;
		} else {
			return false;
		}
	}

	//* Função que formata o objeto para o padrão Base64
	convertToBase64(item) {
		return btoa(JSON.stringify(item));
	}

	//função para padronizar o retorno dos selects
	transformSelect(itemList: string[]): Select[] | any {
		if (itemList) {
			let tempList = [];
			itemList.map((item: string) => {
				tempList.push({ label: String(item), value: String(item) });
			});
			return tempList;
		}
	}

	/**
	 * Para receber os arrays com referências dos Json's de tradução
	 * e montar o objeto com label traduzida e value padrão que o banco aceita
	 * necessidade de acesso ao body do da requisição.
	 *
	 * @param itemList Array com as referências para tradução dos itens.
	 * @param path Caminho para busca do Json de tradução
	 *
	 * @return Objeto com label e value para colocar como opções nos droplists/selects
	 */
	translateOptions(itemList: string[], path: string): Select[] | any {
		if (itemList) {
			let tempList = [];
			itemList.map(item => {
				tempList.push({
					label: this.transloco.translate(path + String(item)),
					value: String(item),
				});
			});
			return tempList;
		}
	}
}
