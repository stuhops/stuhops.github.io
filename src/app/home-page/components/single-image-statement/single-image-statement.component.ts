import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-page-single-image-statement',
  templateUrl: './single-image-statement.component.html',
  styleUrls: ['./single-image-statement.component.scss'],
})
export class SingleImageStatementComponent {
  @Input({ required: true }) altText: string = '';
  @Input() description?: string;
  @Input() imageSide: 'left' | 'right' = 'left';
  @Input({ required: true }) imageSource: string = '';
  @Input({ required: true }) title: string = 'Title';
}
