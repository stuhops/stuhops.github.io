import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Signal,
  ViewChild,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'shared-full-screen-ticker',
  templateUrl: './full-screen-ticker.component.html',
  styleUrls: ['./full-screen-ticker.component.scss'],
})
export class FullScreenTickerComponent implements OnInit {
  @Input() alt: string = '';
  @Input({ required: true }) src: string = '';
  @ViewChild('ticker') tickerRef!: ElementRef;
  image: string | null = null;
  imgRatio: WritableSignal<number | null> = signal(null); // The ratio width:height so we can calculate how wide the image is given a certain height
  imageWidth: Signal<number | null> = computed(() => {
    if (!this.imgRatio()) return null;
    const elHeight: number = this.tickerRef.nativeElement.offsetHeight;
    this._animate();
    return elHeight * this.imgRatio()!;
  });

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.fetchImage();
  }

  fetchImage(): void {
    this._http.get(this.src, { responseType: 'arraybuffer' }).subscribe(
      (data: ArrayBuffer) => {
        const binaryArray = new Uint8Array(data);
        this.image = this._arrayBufferToBase64(binaryArray);
        this.updateImageRatio();
      },
      (error) => {
        console.error(error);
      },
    );
  }

  async updateImageRatio(): Promise<void> {
    const img = new Image();
    img.src = 'data:image/png;base64,' + this.image;
    img.onload = () => this.imgRatio.set(img.width / img.height);
  }

  private _animate(): void {
    // Remove the 'animate' class
    this.tickerRef.nativeElement.classList.remove('animate');

    // Add the 'animate' class back after 100ms
    setTimeout(() => {
      this.tickerRef.nativeElement.classList.add('animate');
    }, 100);
  }

  private _arrayBufferToBase64(buffer: Uint8Array): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
  }
}
