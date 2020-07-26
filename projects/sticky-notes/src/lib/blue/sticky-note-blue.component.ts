import { Component, HostBinding } from '@angular/core';
import { StickyNotesComponent } from '../sticky-notes.component';

@Component({
  selector: 'app-sticky-note-blue',
  templateUrl: '../sticky-note.component.html',
  styleUrls: ['../sticky-note.component.css']
})
export class StickyNoteBlueComponent extends StickyNotesComponent {
  @HostBinding('style.height') customHeight = 'auto';
  @HostBinding('style.backgroundColor') bgColor = '#9383d6';
  @HostBinding('style.backgroundImage') bgImage = 'linear-gradient(150deg, #6260eb 0%,#bbadf8 100%)';
}
