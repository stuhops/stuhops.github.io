import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent {
  environment = environment;
}
