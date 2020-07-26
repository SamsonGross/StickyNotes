import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteTextboxComponent } from './sticky-note-textbox.component';

describe('StickyNoteTextboxComponent', () => {
  let component: StickyNoteTextboxComponent;
  let fixture: ComponentFixture<StickyNoteTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyNoteTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNoteTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
