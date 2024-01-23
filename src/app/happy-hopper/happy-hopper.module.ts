import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HappyHopperComponent } from './components/happy-hopper/happy-hopper.component';
import { HappyHopperRouter } from './happy-hopper.router';
import { PlayComponent } from './components/play/play.component';

@NgModule({
  imports: [HappyHopperRouter, SharedModule],
  declarations: [HappyHopperComponent, PlayComponent],
})
export class HappyHopperModule {}
