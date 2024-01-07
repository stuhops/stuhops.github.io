import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-full-screen-ticker',
  templateUrl: './full-screen-ticker.component.html',
  styleUrls: ['./full-screen-ticker.component.scss'],
})
export class FullScreenTickerComponent implements AfterViewInit {
  @Input() alt: string = '';
  @Input({ required: true }) src: string = '';
  @Input({ required: true }) imgRatio: number = 0; // The ratio width:height so we can calculate how wide the image is given a certain height
  @ViewChild('ticker') tickerRef!: ElementRef;
  imageWidth: number = 0;

  ngAfterViewInit(): void {
    const elHeight: number = this.tickerRef.nativeElement.offsetHeight;
    setTimeout(() => {
      this.imageWidth = elHeight * this.imgRatio;
    }, 0); // Removes the ng100 error but we have to do this math after everything has been set
  }
}
