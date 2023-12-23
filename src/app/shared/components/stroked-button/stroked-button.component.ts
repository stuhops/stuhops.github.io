import { Component, Input } from '@angular/core';
import { BasicColors } from '../../basic-colors.model';

@Component({
  selector: 'shared-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrls: ['../../styles/basic-button.style.scss', './stroked-button.component.scss'],
})
export class StrokedButtonComponent {
  @Input() lightText: boolean = false;
  @Input() oversized: boolean = false;
  @Input() stroke: BasicColors | null = null;
  @Input() textShadow: boolean = false;
  StrokeColors = BasicColors;
}
