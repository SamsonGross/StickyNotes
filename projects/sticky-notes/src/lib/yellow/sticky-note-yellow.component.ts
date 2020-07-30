import { Component, HostBinding } from '@angular/core';
import { StickyNoteComponent } from '../sticky-note.component';

@Component({
  selector: 'app-sticky-note-yellow',
  templateUrl: '../sticky-note.component.html',
  styleUrls: ['../sticky-note.component.css']
})
export class StickyNoteYellowComponent extends StickyNoteComponent {
  @HostBinding('style.height') customHeight = 'auto';
  @HostBinding('style.backgroundColor') bgColor = '#fefabc';
  @HostBinding('style.backgroundImage') bgImage = 'linear-gradient(150deg, #efec88 0%,#fefabc 100%)';
}
