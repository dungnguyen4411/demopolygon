import {Component} from '@angular/core';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'cdk-drag-drop-overview-example',
  templateUrl: 'cdk-drag-drop-overview-example.html',
  styleUrls: ['cdk-drag-drop-overview-example.css'],
})
export class CdkDragDropOverviewExample {
  public data1 = "693 5, 693 575, 743 575, 743 5";
  public data2 = "419 5, 419 575, 469 575, 469 5"
  public data3 = "5 375,5 414, 672 414, 672 373";
  public data4 =" 629 371, 657 413,1244 438, 1243 393";
  pointLT: any = {x: 693, y: 5};
  /** 頂点[左下] */
  pointLB: any = {x: 693, y: 575};
  /** 頂点[右下] */
  pointRB: any = {x: 743, y: 575};
  /** 頂点[右上] */
  pointRT: any = {x: 743, y: 5};
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */