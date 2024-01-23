import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HappyHopperComponent } from './components/happy-hopper/happy-hopper.component';
import { HappyHopperRouter } from './happy-hopper.router';

@NgModule({
  imports: [HappyHopperRouter, SharedModule],
  declarations: [HappyHopperComponent],
})
export class HappyHopperModule {}
