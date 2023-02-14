import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrCodeComponent {
  @Input() backgroundColor?: string;
  @Input() codeColor?: string;
  @Input() showDownloadButton: boolean = true;
  @Input() url: string = '';
  @Output() qrCodeChange = new EventEmitter<SafeUrl>();
  private _qrCodeURL: SafeUrl = '';

  get qrCodeURL(): SafeUrl {
    return this._qrCodeURL;
  }

  set qrCodeURL(next: SafeUrl) {
    this._qrCodeURL = next;
    this.qrCodeChange.emit(this._qrCodeURL);
  }
}
