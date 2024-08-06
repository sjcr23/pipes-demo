import { registerLocaleData } from '@angular/common';

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Locale config
import esCR from '@angular/common/locales/es-CR'
import bra from '@angular/common/locales/br'
import koKP from '@angular/common/locales/ko-KP'
import jap from '@angular/common/locales/ja'
import frCa from '@angular/common/locales/fr-CA'

registerLocaleData( esCR );
registerLocaleData( bra );
registerLocaleData( koKP );
registerLocaleData( jap );
registerLocaleData( frCa );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
