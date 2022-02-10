import { Component, OnInit } from '@angular/core';
import { paragraphs } from '@app/shared/helpers/about-me-paragraphs';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styles: [''],
})
export class AboutMeComponent implements OnInit {
	paragraphs: string[] = [];

	constructor() {}

	ngOnInit() {
		this.paragraphs = paragraphs;
	}
}
