import { Component, Input } from '@angular/core';
import { BasicColors } from 'src/app/shared/basic-colors.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-my-work-card',
  templateUrl: './my-work-card.component.html',
  styleUrls: ['./my-work-card.component.scss'],
})
export class MyWorkCardComponent {
  @Input() button?: string;
  @Input() href: string = environment.resume.github;
  @Input() image: string = `${environment.assetPrefix}code-sample.png`;
  @Input() statements: string[] = [];
  @Input({ required: true }) title: string = 'Title';
  BasicColors = BasicColors;
}
