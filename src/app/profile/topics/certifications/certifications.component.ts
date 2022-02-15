import { Component, OnInit } from '@angular/core';
import {
	Git,
	Angular,
	Certifications,
	Electron,
	Flutter,
	MongoDB,
	Node,
	React,
	ReactNative,
} from '@app/shared/helpers/certifications';

interface ICertification {
	name: string;
	institution: string;
	end: string;
	url?: string;
	credential?: string;
}

interface IFilter {
	name: string;
	code: string;
	logo: string;
}

const Filter = [
	{ name: 'Git', code: 'git', logo: 'git_logo' },
	{ name: 'Angular', code: 'angular', logo: 'angular_logo' },
	{ name: 'React', code: 'react', logo: 'react_logo' },
	{ name: 'Flutter', code: 'flutter', logo: 'flutter_logo' },
	{ name: 'React Native', code: 'react_native', logo: 'react_native_logo' },
	{ name: 'Node JS', code: 'nodejs', logo: 'node_logo' },
	{ name: 'MongoDB', code: 'mongodb', logo: 'mongo_logo' },
	{ name: 'Electron JS', code: 'electron', logo: 'electron_logo' },
];

const filteredItems = {
	git: Git,
	angular: Angular,
	react: React,
	flutter: Flutter,
	react_native: ReactNative,
	nodejs: Node,
	mongodb: MongoDB,
	electron: Electron,
};

@Component({
	selector: 'app-certifications',
	templateUrl: './certifications.component.html',
	styles: [
		`
			:host ::ng-deep .p-dropdown {
				width: 14rem;
			}

			@media (max-width: 350px) {
				.logo {
					display: none;
				}
			}
		`,
	],
})
export class CertificationsComponent implements OnInit {
	certifications: ICertification[];

	selectedCertification: string;

	filters: IFilter[] = Filter;

	constructor() {}

	ngOnInit() {
		this.certifications = Certifications;
	}

	filter(event) {
		const filterCode = event.value.code;
		this.certifications = filteredItems[filterCode];
	}
}
