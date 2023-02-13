import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './components/app/app.component';
import { HomePageModule } from './home-page/home-page.module';
import { QrCodeGeneratorModule } from './qrcode-generator/qrcode-generator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HomePageModule, QrCodeGeneratorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
