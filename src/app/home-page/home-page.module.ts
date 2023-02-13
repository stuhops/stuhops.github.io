import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { BannerImageComponent } from './components/banner-image/banner-image.component';

@NgModule({
  declarations: [HomePageComponent, BannerImageComponent],
  imports: [CommonModule, SharedModule],
})
export class HomePageModule {}
