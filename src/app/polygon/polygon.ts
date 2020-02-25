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
      x: this.pointLT.x - this.thickness,
      y: ((this.pointRT.y + this.pointLB.y) / 2) - this.thickness,
    }
  }
  public get MR() {
    return {
      x: this.pointRT.x - this.thickness,
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
  onMouseMove(event: any, numberId: any) {
    this.itemDisable = true;
    console.log(event, "onMouseMove");
    switch (numberId) {
      case 4:
        this.pointLB.x = event.offsetX;
        this.pointLT.x = event.offsetX;
        break;
      case 2:
        this.pointRT.x = event.offsetX;
        this.pointRB.x = event.offsetX;
        console.log(event, "onMouseMove");
        break;
      case 1:
        this.pointRT.y = event.offsetY;
        this.pointLT.y = event.offsetY;
        console.log(event, "onMouseMove");
        break;
      case 3:
        this.pointRB.y = event.offsetY;
        this.pointLB.y = event.offsetY;
        console.log(event, "onMouseMove");
        break;
    }
  }
  onMouseMoveRect(event: any, numberId: any) {
    this.itemDisable = true;
    console.log(event, "onMouseMove");
    switch (numberId) {
      case 1:
        this.pointLT.x = event.offsetX;
        this.pointLT.y = event.offsetY;
        console.log(event, "onMouseMove");
        break;
      case 2:
        this.pointLB.x = event.offsetX;
        this.pointLB.y = event.offsetY;
        console.log(event, "onMouseMove");
        break;
      case 3:
        this.pointRB.x = event.offsetX;
        this.pointRB.y = event.offsetY;
        console.log(event, "onMouseMove");
        break;
      case 4:
        this.pointRT.x = event.offsetX;
        this.pointRT.y = event.offsetY;
        break;
    }
  }
  onMouseUp(event: any) {
    console.log(event, "onMouseUp");
    this.grabber = false;
  }
  onMouseDown(event: any) {
    console.log(event, "onMouseDown");
    this.itemDisable = false;
    this.grabber = true;
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