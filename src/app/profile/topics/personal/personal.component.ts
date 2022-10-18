import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-personal',
	templateUrl: './personal.component.html',
	styles: [``],
})
export class PersonalComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	openCurriculum() {
		const curriculumLink =
			'https://drive.google.com/file/d/1jZpsi2Fx-aAJLzHLrSTh4An3BymtM9F_/view?usp=sharing';
		window.open(curriculumLink, '_blank');
	}
}
