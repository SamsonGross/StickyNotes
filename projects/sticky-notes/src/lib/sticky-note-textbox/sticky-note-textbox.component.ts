import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sem-sticky-note-textbox',
  templateUrl: './sticky-note-textbox.component.html',
  styleUrls: ['./sticky-note-textbox.component.scss']
})
export class StickyNoteTextboxComponent {
    @Input() value = '';
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    editable = false;
    classes: string;

    /**
     * Triggered on value change of the text area.
     */
    onChange() { this.valueChange.emit(this.value); }

    /**
     * Stops the mouse event propagation if the text editing is disabled.
     * Disable drag and drop while text editing is enabled.
     */
    onMouseDown(event: any) {
      if (this.editable) {
        event.stopPropagation();
      }
    }

    /**
     * Enables text editing.
     * Called on double click on the text area
     * @param event the dbClick event
     */
    enable(event: any) {
      // only if text editing is disabled
      if (!this.editable) {
        this.editable = true;                   // set true
        this.classes += ' enableTextSelection';  // add text selection css style
        event.target.select();                  // select text
      }
    }

    /**
     * Disables text editing.
     * Called on focus lose on the text area
     */
    disable() {
      // only if text editing is enabled
      if (this.editable) {
        this.editable = false;                // set false
        this.classes = '';                    // remove text selection css style
      }
    }

  }
