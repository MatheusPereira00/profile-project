import { Component, OnInit } from '@angular/core';
import { Skills } from '@app/shared/helpers/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [''],
})
export class SkillsComponent implements OnInit {
  public skills: string[];

  public ngOnInit(): void {
    this.skills = Skills;
  }
}
