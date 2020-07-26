import { Component, HostBinding } from '@angular/core';
import { StickyNotesComponent } from '../sticky-notes.component';

@Component({
  selector: 'app-sticky-note-green',
  templateUrl: '../sticky-note.component.html',
  styleUrls: ['../sticky-note.component.css']
})
export class StickyNoteGreenComponent extends StickyNotesComponent {
  @HostBinding('style.height') customHeight = 'auto';
  @HostBinding('style.backgroundColor') bgColor = '#bcfebc';
  @HostBinding('style.backgroundImage') bgImage = 'linear-gradient(150deg, #52db64 0%,#bcfeda 100%)';
}
