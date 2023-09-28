import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeGeneratorComponent } from './components/qrcode-generator/qrcode-generator.component';

const routes: Routes = [
  {
    title: 'QR Generator',
    path: '**',
    component: QrCodeGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRCodeRoutingModule {}
