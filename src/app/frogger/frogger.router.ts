import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FroggerComponent } from './components/frogger/frogger.component';

const routes: Routes = [
  {
    title: 'Frogger',
    path: '**',
    component: FroggerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FroggerRouterModule {}
