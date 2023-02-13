import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/components/home-page/home-page.component';
import { QrCodeGeneratorComponent } from '../qrcode-generator/components/qrcode-generator/qrcode-generator.component';

const routes: Routes = [
  {
    title: 'QR Generator',
    path: 'qrcode',
    component: QrCodeGeneratorComponent,
  },
  {
    title: 'Stuart Hopkins',
    path: '**',
    component: QrCodeGeneratorComponent, // TODO: Update to home page component once built
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
