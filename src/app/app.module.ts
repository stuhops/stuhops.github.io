import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './components/app/app.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
