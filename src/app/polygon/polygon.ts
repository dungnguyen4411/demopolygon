import { Component, Input } from '@angular/core';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: '[polygon-example]',
  templateUrl: 'polygon.html',
  styleUrls: ['polygon.css'],
})
export class PolygonElement {
  public data1 = "693 5, 693 575, 743 575, 743 5";
  public thickness = 3;
  @Input()
  pointLT: Point;
  @Input()
  /** 頂点[左下] */
  pointLB: Point;
  @Input()
  /** 頂点[右下] */
  pointRB: Point;
  @Input()
  /** 頂点[右上] */
  pointRT: Point;
  private _select = false;
  public itemDisable = false;
  public get Points() {
    return this.pointLT.x + " " + this.pointLT.y
      + ", " + this.pointLB.x + " " + this.pointLB.y
      + ", " + this.pointRB.x + " " + this.pointRB.y
      + ", " + this.pointRT.x + " " + this.pointRT.y;
  }
  public get MT() {
    return {
      x: ((this.pointRT.x + this.pointLT.x) / 2) - this.thickness,
      y: ((this.pointRT.y + this.pointLT.y) / 2) - this.thickness,
    }
  }
  public get ML() {
    return {
      x: ((this.pointLT.x + this.pointLB.x) / 2) - this.thickness,
      y: ((this.pointLT.y + this.pointLB.y) / 2) - this.thickness,
    }
  }
  public get MR() {
    return {
      x: ((this.pointRT.x + this.pointRB.x) / 2) - this.thickness,
      y: ((this.pointRT.y + this.pointRB.y) / 2) - this.thickness,
    }
  }
  public get MB() {
    return {
      x: ((this.pointLB.x + this.pointRB.x) / 2) - this.thickness,
      y: ((this.pointLB.y + this.pointRB.y) / 2) - this.thickness,
    }
  }
  grabber = false;
  public get LT() {
    return {
      x: this.pointLT.x,
      y: this.pointLT.y,
    }
  }
  public get LB() {
    return {
      x: this.pointLB.x,
      y: this.pointLB.y,
    }
  }
  public get RT() {
    return {
      x: this.pointRT.x,
      y: this.pointRT.y,
    }
  }
  public get RB() {
    return {
      x: this.pointRB.x,
      y: this.pointRB.y,
    }
  }
  onMouseMoveRect(event: any, numberId: any) {
    this.itemDisable = true;
    console.log(event, "onMouseMove");
    switch (numberId) {
      case 1:
        this.pointLT.x = event.event.offsetX;
        this.pointLT.y = event.event.offsetY;
        break;
      case 2:
        this.pointRT.x = event.event.offsetX;
        this.pointRT.y = event.event.offsetY;
        break;
      case 3:
        this.pointRB.x = event.event.offsetX;
        this.pointRB.y = event.event.offsetY;
        break;
      case 4:
        this.pointLB.x = event.event.offsetX;
        this.pointLB.y = event.event.offsetY;
        break;
    }
  }
  onStart(event: any) {
    this.itemDisable = true;
  }
  onMove(event: any, numberId: any) {
    switch (numberId) {
      case 1:
        this.pointRT.y += event.delta.y;
        this.pointLT.y += event.delta.y;
        break;
      case 2:
        this.pointRT.x += event.delta.x;
        this.pointRB.x += event.delta.x;
        break;
      case 3:
        this.pointRB.y += event.delta.y;
        this.pointLB.y += event.delta.y;
        break;
      case 4:
        this.pointLT.x += event.delta.x;
        this.pointLB.x += event.delta.x;
        break;
    }
  }
  @Input()
  public set data(value: any) {
    console.log(value);
  }
  onSelect() {
    this._select = !this._select;
  }
}
class Point {
  public x: any;
  public y: any;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */