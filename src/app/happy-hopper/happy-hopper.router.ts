import { RouterModule, Routes } from '@angular/router';
import { HappyHopperComponent } from './components/happy-hopper/happy-hopper.component';
import { NgModule } from '@angular/core';
import { PlayComponent } from './components/play/play.component';

const routes: Routes = [
  { path: '', component: HappyHopperComponent },
  { path: 'play', component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HappyHopperRouter {}
