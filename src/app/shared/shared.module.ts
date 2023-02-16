import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const commonImportsAndExports: (any[] | Type<any> | ModuleWithProviders<any>)[] = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [commonImportsAndExports],
  exports: [commonImportsAndExports],
})
export class SharedModule {}
