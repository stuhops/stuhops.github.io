import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss'],
})
export class BannerImageComponent {
  @Input({ required: true }) imageSource!: string;
  @Input() statement: string = 'Full Stack\nDeveloper.';
  resumeDownload = `${environment.assetPrefix}${environment.resume.download}`;
  email = environment.resume.email;
}
