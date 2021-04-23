import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import Vector2D from '../../common/Vector2D'

@Component({
  selector: 'app-vector-tree',
  templateUrl: './vector-tree.component.html',
  styleUrls: ['./vector-tree.component.less']
})
export class VectorTreeComponent implements OnInit {

  @ViewChild('mainCanvas') canvasView !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() : void {
    this.drawPicture()
  }
  drawPicture(): void {
    
    const canvas = this.canvasView.nativeElement
    const ctx = canvas.getContext('2d');

    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);
    ctx.lineCap = 'round';
    
    const v0 = new Vector2D(256, 0);
    this.drawBranch(ctx, v0, 50, 10, 1, 3);

  }
  drawBranch(context: any, v0: any, length: any, thickness: any, dir: any, bias: any) : void {
    const v = new Vector2D().rotate(dir).scale(length);
    const v1 = v0.copy().add(v);
  
    context.lineWidth = thickness;
    context.beginPath();
    context.moveTo(...v0);
    context.lineTo(...v1);
    context.stroke();
  
    if(thickness > 2) {
      const left = Math.PI / 4 + 0.5 * (dir + 0.2) + bias * (Math.random() - 0.5);
      this.drawBranch(context, v1, length * 0.9, thickness * 0.8, left, bias * 0.9);
      const right = Math.PI / 4 + 0.5 * (dir - 0.2) + bias * (Math.random() - 0.5);
      this.drawBranch(context, v1, length * 0.9, thickness * 0.8, right, bias * 0.9);
    }
  
    if(thickness < 5 && Math.random() < 0.3) {
      context.save();
      context.strokeStyle = '#c72c35';
      const th = Math.random() * 6 + 3;
      context.lineWidth = th;
      context.beginPath();
      context.moveTo(...v1);
      context.lineTo(v1.x, v1.y - 2);
      context.stroke();
      context.restore();
    }
  }
}
