import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrCodeComponent {
  @Input() backgroundColor: string = '#ffffff';
  @Input() codeColor: string = '#000000';
  @Input() url: string = '';
}
