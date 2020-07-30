import { Component, HostBinding } from '@angular/core';
import { StickyNoteComponent } from '../sticky-note.component';

@Component({
  selector: 'app-sticky-note-green',
  templateUrl: '../sticky-note.component.html',
  styleUrls: ['../sticky-note.component.css']
})
export class StickyNoteGreenComponent extends StickyNoteComponent {
  @HostBinding('style.height') customHeight = 'auto';
  @HostBinding('style.backgroundColor') bgColor = '#bcfebc';
  @HostBinding('style.backgroundImage') bgImage = 'linear-gradient(150deg, #52db64 0%,#bcfeda 100%)';
}
