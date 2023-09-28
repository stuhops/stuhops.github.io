import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'qrcode',
    loadChildren: () =>
      import('./qrcode-generator/qrcode-generator.module').then((m) => m.QrCodeGeneratorModule),
  },
  {
    path: 'frogger',
    loadChildren: () => import('./frogger/frogger.module').then((m) => m.FroggerModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
