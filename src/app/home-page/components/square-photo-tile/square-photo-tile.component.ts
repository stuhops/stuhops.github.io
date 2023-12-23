import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-square-photo-tile',
  templateUrl: './square-photo-tile.component.html',
  styleUrls: ['./square-photo-tile.component.scss'],
})
export class SquarePhotoTileComponent {
  @Input({ required: true }) image: string = `${environment.assetPrefix}code-sample.png`;
  @Input() subtitle?: string;
}
