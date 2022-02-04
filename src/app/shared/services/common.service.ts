import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import * as FileSaver from 'file-saver';
import * as xlsx from 'xlsx';
import { Select } from '../models/select.model';

@Injectable({
	providedIn: 'root',
})
export class CommonServices {
	constructor(private transloco: TranslocoService) {}

	//* Função que valida o email cadastrado
	validEmail(form: FormGroup): boolean {
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

	//função que transforma as informações da tabela para o formato xls
	public exportExcel(jsonData: any[], fileName: string): void {
		const worksheet = xlsx.utils.json_to_sheet(jsonData);
		const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
		const excelBuffer: any = xlsx.write(workbook, {
			bookType: 'xlsx',
			type: 'array',
		});
		this.saveExcelFile(excelBuffer, fileName);
	}

	//função que salva as informações da tabela para o formato xls
	private saveExcelFile(buffer: any, fileName: string): void {
		let EXCEL_TYPE =
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
		let EXCEL_EXTENSION = '.xlsx';
		let date = new Date();
		let format =
			'  ' + date.getDate() + ' - ' + date.getHours() + '_' + date.getMinutes();
		const data: Blob = new Blob([buffer], {
			type: EXCEL_TYPE,
		});
		FileSaver.saveAs(data, fileName + format + EXCEL_EXTENSION);
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
