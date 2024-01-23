import { Component } from '@angular/core';
import { BasicColors } from 'src/app/shared/basic-colors.model';

@Component({
  selector: 'happy-hopper',
  templateUrl: './happy-hopper.component.html',
  styleUrls: ['./happy-hopper.component.scss'],
})
export class HappyHopperComponent {
  BasicColors = BasicColors;
}
