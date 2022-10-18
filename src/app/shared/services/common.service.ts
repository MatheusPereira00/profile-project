import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { Select } from '../models/select.model';

@Injectable({
	providedIn: 'root',
})
export class CommonServices {
	constructor() {}

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
}
