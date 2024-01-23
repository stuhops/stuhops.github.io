import { RouterModule, Routes } from '@angular/router';
import { HappyHopperComponent } from './components/happy-hopper/happy-hopper.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: HappyHopperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HappyHopperRouter {}
