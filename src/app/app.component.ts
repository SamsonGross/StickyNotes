import { Component } from '@angular/core';
import { IModelPackage } from '@semantic-canvas/semantic-canvas-core/lib/library/domain/IModelPackage';
import { ICanvasElementShape } from '@semantic-canvas/semantic-canvas-core/lib/canvas/domain/ICanvasElementShape';
import { ICanvasShapeFactory } from '@semantic-canvas/semantic-canvas-core/lib/canvas/domain/ICanvasShapeFactory';
import { StickyNoteRedComponent } from 'projects/sticky-notes/src/lib/red/sticky-note-red.component';
import { StickyNoteYellowComponent } from 'projects/sticky-notes/src/lib/yellow/sticky-note-yellow.component';
import { StickyNoteBlueComponent } from 'projects/sticky-notes/src/lib/blue/sticky-note-blue.component';
import { StickyNoteGreenComponent } from 'projects/sticky-notes/src/lib/green/sticky-note-green.component';
import { GenericCanvasFactory } from '@semantic-canvas/semantic-canvas-core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StickyNotesDemo';


  stickyNotesFactories: ICanvasShapeFactory[] = [
    // Sticky Notes
    {
      type: 'StickyNoteYellow',
      factory: new GenericCanvasFactory<StickyNoteYellowComponent>(StickyNoteYellowComponent)
    },
    {
      type: 'StickyNoteRed',
      factory: new GenericCanvasFactory<StickyNoteRedComponent>(StickyNoteRedComponent)
    },
    {
      type: 'StickyNoteGreen',
      factory: new GenericCanvasFactory<StickyNoteGreenComponent>(StickyNoteGreenComponent)
    },
    {
      type: 'StickyNoteBlue',
      factory: new GenericCanvasFactory<StickyNoteBlueComponent>(StickyNoteBlueComponent)
    }
  ];

  stickyNotesShapes: ICanvasElementShape[] = [
    {
      name: 'StickyNoteYellow',
      width: 170,
      height: 70,
      containerShadow: false,
      iconUrl: 'assets/stickynotes/StickyNoteYellow.svg'
    }, {
      name: 'StickyNoteBlue',
      width: 170,
      height: 70,
      containerShadow: false,
      iconUrl: 'assets/stickynotes/StickyNoteBlue.svg'
    }, {
      name: 'StickyNoteGreen',
      width: 170,
      height: 70,
      containerShadow: false,
      iconUrl: 'assets/stickynotes/StickyNoteGreen.svg'
    }, {
      name: 'StickyNoteRed',
      width: 170,
      height: 70,
      containerShadow: false,
      iconUrl: 'assets/stickynotes/StickyNoteRed.svg'
    }
  ];

  stickyNotesPackages: IModelPackage[] = [{
    title: 'Sticky Notes',
    description: 'StickyNotes to use on the canvas',
    inToolbar: true,
    model: {
      elements: [
        {
          type: 'StickyNoteYellow',
          name: 'Yellow Sticky Note'
        },
        {
          type: 'StickyNoteRed',
          name: 'Red Sticky Note'
        },
        {
          type: 'StickyNoteBlue',
          name: 'Blue Sticky Note'
        },
        {
          type: 'StickyNoteGreen',
          name: 'Green Sticky Note'
        }
      ],
      relations: [
        // none yet
      ]
    }
  }];
}
