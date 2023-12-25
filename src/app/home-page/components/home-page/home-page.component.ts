import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageSize } from '../../models/image-size.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  environment = environment;
  bannerImageSizes: ImageSize[] = [
    {
      file: `${environment.assetPrefix}main-profile-image/xs.jpg`,
      minWidth: 0,
      verticalFile: `${environment.assetPrefix}main-profile-image/vertical-xs.jpg`,
    },
    {
      file: `${environment.assetPrefix}main-profile-image/small.jpg`,
      minWidth: environment.breakpoints.small,
      verticalFile: `${environment.assetPrefix}main-profile-image/vertical-small.jpg`,
    },
    {
      file: `${environment.assetPrefix}main-profile-image/medium.jpg`,
      minWidth: environment.breakpoints.medium,
    },
    {
      file: `${environment.assetPrefix}main-profile-image/large.jpg`,
      minWidth: environment.breakpoints.large,
    },
    {
      file: `${environment.assetPrefix}main-profile-image/xl.jpg`,
      minWidth: environment.breakpoints.xl,
    },
  ];
}
