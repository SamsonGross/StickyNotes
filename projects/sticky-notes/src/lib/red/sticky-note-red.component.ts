import { Component, HostBinding } from '@angular/core';
import { StickyNoteComponent } from '../sticky-note.component';

@Component({
  selector: 'app-sticky-note-red',
  templateUrl: '../sticky-note.component.html',
  styleUrls: ['../sticky-note.component.css']
})
export class StickyNoteRedComponent extends StickyNoteComponent {
  @HostBinding('style.height') customHeight = 'auto';
  @HostBinding('style.backgroundColor') bgColor = '#da6c6c';
  @HostBinding('style.backgroundImage') bgImage = 'linear-gradient(150deg, #ee6583 0%,#febcca 100%)';
}
