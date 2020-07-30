import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StickyNoteYellowComponent } from './yellow/sticky-note-yellow.component';
import { StickyNoteRedComponent } from './red/sticky-note-red.component';
import { StickyNoteBlueComponent } from './blue/sticky-note-blue.component';
import { StickyNoteGreenComponent } from './green/sticky-note-green.component';
import { EditableTextboxComponent } from './editable-textbox/editable-textbox.component';
import { StickyNoteComponent } from './sticky-note.component';

@NgModule({
  declarations: [
    StickyNoteYellowComponent,
    StickyNoteRedComponent,
    StickyNoteBlueComponent,
    StickyNoteGreenComponent,
    StickyNoteComponent,
    EditableTextboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StickyNotesModule { }
