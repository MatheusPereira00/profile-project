import { Component, OnInit } from '@angular/core';
import { Experiences } from '@app/shared/helpers/experiences';

interface IExperience {
  position: string;
  company: string;
  period: string;
  tasks: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styles: [''],
})
export class ExperiencesComponent implements OnInit {
  public experiences: IExperience[];

  public ngOnInit(): void {
    this.experiences = Experiences;
  }
}
