import { Component, OnInit } from '@angular/core';
import { Courses } from '@app/shared/helpers/courses';

interface ICourse {
	name: string;
	institution: string;
	end: string;
	url?: string;
	credential?: string;
}

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styles: [''],
})
export class CoursesComponent implements OnInit {
	courses: ICourse[];

	constructor() {}

	ngOnInit() {
		this.courses = Courses;
	}
}
