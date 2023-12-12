import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DevisesComponent } from './devises/devises.component';
import { AjoutDeviseComponent } from './ajout-devise/ajout-devise.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EchangedeviceComponent } from './echangedevice/echangedevice.component';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    DevisesComponent,
    AjoutDeviseComponent,
    EchangedeviceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }