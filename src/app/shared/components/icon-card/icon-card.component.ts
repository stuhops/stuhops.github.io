import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent {
  @Input() accentColor: string = '#1976D2';
  @Input() icon: string = 'palette';
  @Input() outline: boolean = true;
  @Input() title: string = '';
}
