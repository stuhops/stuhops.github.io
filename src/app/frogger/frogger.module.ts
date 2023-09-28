import { NgModule } from '@angular/core';
import { FroggerComponent } from './components/frogger/frogger.component';
import { SharedModule } from '../shared/shared.module';
import { FroggerRouterModule } from './frogger.router';
import { FroggerAppComponent } from './components/frogger-app/frogger-app.component';

@NgModule({
  declarations: [FroggerComponent, FroggerAppComponent],
  imports: [SharedModule, FroggerRouterModule],
})
export class FroggerModule {}
