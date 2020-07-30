import { Component, HostBinding } from '@angular/core';
import { StickyNoteComponent } from '../sticky-note.component';

@Component({
  selector: 'app-sticky-note-blue',
  templateUrl: '../sticky-note.component.html',
  styleUrls: ['../sticky-note.component.css']
})
export class StickyNoteBlueComponent extends StickyNoteComponent {
  @HostBinding('style.height') customHeight = 'auto';
  @HostBinding('style.backgroundColor') bgColor = '#9383d6';
  @HostBinding('style.backgroundImage') bgImage = 'linear-gradient(150deg, #6260eb 0%,#bbadf8 100%)';
}
