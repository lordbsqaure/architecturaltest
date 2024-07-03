import { Component, Input, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-single-door',
  templateUrl: './single-door.component.html',
  styleUrls: ['./single-door.component.scss'],
})
export class SingleDoorComponent implements OnInit {
  private stage!: Konva.Stage;
  private layer!: Konva.Layer;
  @Input() radius: number = 100; // Fixed radius, can be an input if needed
  @Input() angle: number = 0; // Angle in degrees
  // Fixed radius
  constructor() {}
  ngOnInit() {
    this.initKonva();
  }

  private initKonva() {
    this.stage = new Konva.Stage({
      container: 'konva-container',
      width: window.innerWidth,
      height: window.innerHeight,
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    const quarterCircle = new Konva.Shape({
      sceneFunc: (context, shape) => {
        context.beginPath();
        context.moveTo(0, 0); // Move to the center
        context.lineTo(this.radius, 0); // Draw the first radius line
        context.arc(0, 0, this.radius, 0, Math.PI / 2, false); // Draw the arc
        // Draw the second radius line
        context.strokeShape(shape);
      },
      stroke: 'black',
      strokeWidth: 2,
    });

    this.layer.add(quarterCircle);
    this.layer.draw();
  }
}
