import { Component, Input } from '@angular/core';
import { BasicColors } from 'src/app/shared/basic-colors.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss'],
})
export class BannerImageComponent {
  @Input({ required: true }) imageSource!: string;
  @Input() statement: string = 'Full Stack\nDeveloper.';
  BasicColors = BasicColors;
  resumeDownload = `${environment.assetPrefix}${environment.resume.download}`;
  email = environment.resume.email;
}
