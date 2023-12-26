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
      image: `${environment.assetPrefix}outside-of-work/climbing-small.jpg`,
      subtitle: 'My favorite sport is climbing',
    },
    {
      image: `${environment.assetPrefix}outside-of-work/kayaking-small.jpg`,
      subtitle: 'I love to kayak',
    },
    {
      image: `${environment.assetPrefix}outside-of-work/zion-small.jpg`,
      subtitle: 'Zion national park is my second home',
    },
    {
      image: `${environment.assetPrefix}outside-of-work/el-cap-small.jpg`,
      subtitle: 'In 2023 I climbed El Capitan in Yosemite!',
    },
    {
      image: `${environment.assetPrefix}outside-of-work/guiding-small.jpg`,
      subtitle: 'I also love to guide in, teach about, and share with others how to get outside',
    },
    {
      image: `${environment.assetPrefix}outside-of-work/rowing-small.jpg`,
      subtitle: 'I enjoy long multi-day river trips',
    },
    {
      image: `${environment.assetPrefix}outside-of-work/biology-small.jpg`,
      subtitle: 'I love biology and foraging for wild things to eat',
    },
    {
      image: `${environment.assetPrefix}outside-of-work/backpacking-small.jpg`,
      subtitle: 'I like to backpack and reach beautiful places',
    },
  ];
}
