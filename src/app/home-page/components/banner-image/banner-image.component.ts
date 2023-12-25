import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BasicColors } from 'src/app/shared/basic-colors.model';
import { environment } from 'src/environments/environment';
import { debounceTime, of } from 'rxjs';
import { ImageSize } from '../../models/image-size.model';

@Component({
  selector: 'home-page-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss'],
})
export class BannerImageComponent implements OnInit {
  @Input({ required: true }) imageSource!: string;
  @Input() imageSizes: ImageSize[] = [];
  @Input() statement: string = 'Full Stack\nDeveloper.';
  BasicColors = BasicColors;
  resumeDownload = `${environment.assetPrefix}${environment.resume.download}`;
  email = environment.resume.email;

  ngOnInit(): void {
    this.onResize();
  }

  // Since we don't have a server to do nice image sizing for us
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    of(null)
      .pipe(debounceTime(1000))
      .subscribe(() => {
        if (this.imageSizes.length) {
          let next: string = this.imageSource;
          for (const imageSize of this.imageSizes) {
            if (imageSize.minWidth < window.innerWidth) {
              next =
                imageSize.verticalFile && window.innerHeight > window.innerWidth
                  ? imageSize.verticalFile
                  : imageSize.file;
            }
          }
          this.imageSource = next;
        }
      });
  }
}
