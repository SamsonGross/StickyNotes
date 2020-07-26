import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickyNoteYellowComponent } from './yellow/sticky-note-yellow.component';
import { StickyNoteRedComponent } from './red/sticky-note-red.component';
import { StickyNoteBlueComponent } from './blue/sticky-note-blue.component';
import { StickyNoteGreenComponent } from './green/sticky-note-green.component';

import { SemanticCanvasCoreModule } from '@semantic-canvas/semantic-canvas-core';

@NgModule({
  declarations: [
    StickyNoteYellowComponent,
    StickyNoteRedComponent,
    StickyNoteBlueComponent,
    StickyNoteGreenComponent
  ],
  imports: [
    CommonModule,
    SemanticCanvasCoreModule
  ],
  exports: [
    StickyNoteYellowComponent,
    StickyNoteRedComponent,
    StickyNoteBlueComponent,
    StickyNoteGreenComponent,
  ]
})
export class StickyNotesModule { }
