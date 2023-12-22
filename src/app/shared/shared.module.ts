import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrokedButtonComponent } from './components/stroked-button/stroked-button.component';
import { ContactMeBannerComponent } from './components/contact-me-banner/contact-me-banner.component';

const commonImportsAndExports: (any[] | Type<any> | ModuleWithProviders<any>)[] = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [commonImportsAndExports],
  exports: [commonImportsAndExports, ContactMeBannerComponent, StrokedButtonComponent],
  declarations: [ContactMeBannerComponent, StrokedButtonComponent],
})
export class SharedModule {}
