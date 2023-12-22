import { Component } from '@angular/core';
import { BasicColors } from 'src/app/shared/basic-colors.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent {
  BasicColors = BasicColors;
  environment = environment;
}
