import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sem-editable-textbox',
  templateUrl: './editable-textbox.component.html',
  styleUrls: ['./editable-textbox.component.css']
})
export class EditableTextboxComponent {
  @Input() value = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onBlur() {
    this.valueChange.emit(this.value);
  }
}
