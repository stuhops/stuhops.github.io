import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

import { QrCodeGeneratorComponent } from './components/qrcode-generator/qrcode-generator.component';
import { SharedModule } from '../shared/shared.module';
import { QrCodeComponent } from './components/qrcode/qrcode.component';
import { QRCodeRoutingModule } from './qrcode-generator-router';

@NgModule({
  declarations: [QrCodeGeneratorComponent, QrCodeComponent],
  imports: [QRCodeRoutingModule, QRCodeModule, SharedModule],
})
export class QrCodeGeneratorModule {}
