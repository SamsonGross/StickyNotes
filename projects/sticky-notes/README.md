# StickyNotes for the Semantic Canvas

Showcase: https://samsongross.github.io/semantic-canvas-demo/

## Installation

### 1. Install SemanticCanvasCore

see: https://www.npmjs.com/package/@semantic-canvas/semantic-canvas-core

### 2. Install StickyNotes with npm:

```
npm install @semantic-canvas/sticky-notes
```

### 3. Add library assets to your project

Navigate to angular.json

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "./node_modules/@semantic-canvas/sticky-notes/assets",
    "output": "./assets/"
  }
]
```

### 4. Import module

Navigate to app.module.ts

```typescript
import { StickyNotesModule } from '@semantic-canvas/sticky-notes';

imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SemanticCanvasCoreModule,
    StickyNotesModule
],
```

## How to use

### 1. Define StickyNote shapes

```typescript
// app.component.ts
import { ICanvasElementShape } from '@semantic-canvas/semantic-canvas-core';

myCustomShapes: ICanvasElementShape[] = [
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
```

### 2. Define StickyNote model package

```typescript
// app.component.ts
import { IModelPackage } from '@semantic-canvas/semantic-canvas-core';

 myCustomModelPackage: IModelPackage[] = [
    {
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
    }
  ];
```

### 3. Define StickyNote ShapeFactories

```typescript
// app.component.ts
import { GenericCanvasFactory } from '@semantic-canvas/semantic-canvas-core';
import { StickyNoteYellowComponent, StickyNoteRedComponent, StickyNoteGreenComponent, StickyNoteBlueComponent } from '@semantic-canvas/sticky-notes';

myCustomFactories: ICanvasShapeFactory[] = [
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
```

### 4. Add canvas parameter

```html
<!-- app.component.html-->

<sem-semantic-canvas
  [elementShapes]="myCustomShapes"
  [modelPackages]="myCustomModelPackage"
  [shapeFactories]="myCustomFactories"
>
</sem-semantic-canvas>
```
