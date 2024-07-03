import { Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  ngOnInit() {
    this.initKonva();
  }

  initKonva() {
    const stage = new Konva.Stage({
      container: 'konva-container', // ID of the container <div>
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
    });

    layer.add(circle);
    layer.draw();
  }
}
