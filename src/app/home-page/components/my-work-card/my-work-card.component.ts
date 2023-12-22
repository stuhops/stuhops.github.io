import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-my-work-card',
  templateUrl: './my-work-card.component.html',
  styleUrls: ['./my-work-card.component.scss'],
})
export class MyWorkCardComponent {
  @Input() image: string = `${environment.assetPrefix}code-sample.png`;
}
