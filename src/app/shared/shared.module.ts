import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrokedButtonComponent } from './components/stroked-button/stroked-button.component';
import { ContactMeBannerComponent } from './components/contact-me-banner/contact-me-banner.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { FullScreenTickerComponent } from './components/full-screen-ticker/full-screen-ticker.component';
import { HttpClientModule } from '@angular/common/http';
import { CircleImageStatementComponent } from './components/circle-image-statement/circle-image-statement.component';

const commonImportsAndExports: (any[] | Type<any> | ModuleWithProviders<any>)[] = [
  CommonModule,
  HttpClientModule,
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
    CircleImageStatementComponent,
  ],
  declarations: [
    ContactMeBannerComponent,
    StrokedButtonComponent,
    IconCardComponent,
    FullScreenTickerComponent,
    CircleImageStatementComponent,
  ],
})
export class SharedModule {}
