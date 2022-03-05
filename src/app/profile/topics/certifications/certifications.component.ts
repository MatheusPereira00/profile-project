import { Component, OnInit } from '@angular/core';
import { Certifications } from '@app/shared/helpers/certifications';

interface ICertification {
	name: string;
	institution: string;
	end: string;
	url?: string;
	credential?: string;
	type?: string[];
}

interface IFilter {
	name: string;
	code: string;
	logo: string;
}

const Filters = [
	{ name: 'Git', code: 'git', logo: 'git_logo' },
	{ name: 'Angular', code: 'angular', logo: 'angular_logo' },
	{ name: 'React', code: 'react', logo: 'react_logo' },
	{ name: 'Flutter', code: 'flutter', logo: 'flutter_logo' },
	{ name: 'React Native', code: 'react_native', logo: 'react_native_logo' },
	{ name: 'Node JS', code: 'nodejs', logo: 'node_logo' },
	{ name: 'MongoDB', code: 'mongodb', logo: 'mongo_logo' },
];

@Component({
	selector: 'app-certifications',
	templateUrl: './certifications.component.html',
	styles: [
		`
			.short_url {
				display: none;
			}
			:host ::ng-deep .p-dropdown {
				width: 14rem;
			}

			@media (max-width: 350px) {
				.logo {
					display: none;
				}
			}

			@media (max-width: 490px) {
				.short_url {
					display: inline;
				}

				.long_url {
					display: none;
				}
			}
		`,
	],
})
export class CertificationsComponent implements OnInit {
	certifications: ICertification[];

	selectedCertification: string;

	filters: IFilter[] = Filters;

	constructor() {}

	ngOnInit() {
		this.certifications = Certifications;
	}

	filter(event) {
		const actualSelectedCertifications = Certifications;
		const filterCode = event.value.code;
		this.certifications = actualSelectedCertifications.filter(
			(certification: ICertification) => {
				return certification.type.includes(filterCode);
			},
		);
	}
}
