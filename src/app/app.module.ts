import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SemanticCanvasCoreModule } from '@semantic-canvas/semantic-canvas-core';
import { StickyNotesModule } from 'sticky-notes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SemanticCanvasCoreModule,
    StickyNotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
