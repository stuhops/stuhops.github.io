import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  {
    path: 'happy-hopper',
    loadChildren: () =>
      import('../happy-hopper/happy-hopper.module').then((m) => m.HappyHopperModule),
  },
  {
    path: 'qrcode',
    loadChildren: () =>
      import('../qrcode-generator/qrcode-generator.module').then((m) => m.QrCodeGeneratorModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRouterModule {}
