import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-outside-of-work-banner',
  templateUrl: './outside-of-work-banner.component.html',
  styleUrls: ['./outside-of-work-banner.component.scss'],
})
export class OutsideOfWorkBannerComponent {
  photos: { image: string; subtitle: string }[] = [
    {
      image: `${environment.assetPrefix}code-sample.png`,
      subtitle: 'Hello World. This is a long caption',
    },
    { image: `${environment.assetPrefix}code-sample.png`, subtitle: 'Hello World' },
    { image: `${environment.assetPrefix}code-sample.png`, subtitle: 'Hello World' },
    { image: `${environment.assetPrefix}code-sample.png`, subtitle: 'Hello World' },
    { image: `${environment.assetPrefix}code-sample.png`, subtitle: 'Hello World' },
    { image: `${environment.assetPrefix}code-sample.png`, subtitle: 'Hello World' },
    { image: `${environment.assetPrefix}code-sample.png`, subtitle: 'Hello World' },
    { image: `${environment.assetPrefix}code-sample.png`, subtitle: 'Hello World' },
  ];
}
