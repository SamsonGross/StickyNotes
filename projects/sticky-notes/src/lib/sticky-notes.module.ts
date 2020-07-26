import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StickyNoteYellowComponent } from './yellow/sticky-note-yellow.component';
import { StickyNoteRedComponent } from './red/sticky-note-red.component';
import { StickyNoteBlueComponent } from './blue/sticky-note-blue.component';
import { StickyNoteGreenComponent } from './green/sticky-note-green.component';
import { StickyNoteTextboxComponent } from './sticky-note-textbox/sticky-note-textbox.component';

@NgModule({
  declarations: [
    StickyNoteYellowComponent,
    StickyNoteRedComponent,
    StickyNoteBlueComponent,
    StickyNoteGreenComponent,
    StickyNoteTextboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StickyNoteYellowComponent,
    StickyNoteRedComponent,
    StickyNoteBlueComponent,
    StickyNoteGreenComponent,
  ]
})
export class StickyNotesModule { }
