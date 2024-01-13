import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'shared-circle-image-statement',
  templateUrl: './circle-image-statement.component.html',
  styleUrls: ['./circle-image-statement.component.scss'],
})
export class CircleImageStatementComponent {
  @Input() alt: string = 'Code sample';
  @Input() description?: string;
  @Input() image: string = `${environment.assetPrefix}custom-icons/code.svg`;
  @Input() title: string = 'Title';
}
