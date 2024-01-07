import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrokedButtonComponent } from './components/stroked-button/stroked-button.component';
import { ContactMeBannerComponent } from './components/contact-me-banner/contact-me-banner.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { FullScreenTickerComponent } from './components/full-screen-ticker/full-screen-ticker.component';

const commonImportsAndExports: (any[] | Type<any> | ModuleWithProviders<any>)[] = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [commonImportsAndExports],
  exports: [
    commonImportsAndExports,
    ContactMeBannerComponent,
    StrokedButtonComponent,
    IconCardComponent,
    FullScreenTickerComponent,
  ],
  declarations: [
    ContactMeBannerComponent,
    StrokedButtonComponent,
    IconCardComponent,
    FullScreenTickerComponent,
  ],
})
export class SharedModule {}
