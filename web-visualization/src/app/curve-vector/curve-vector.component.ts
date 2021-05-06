import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import Vector2D from '../../common/Vector2D'

@Component({
  selector: 'app-curve-vector',
  templateUrl: './curve-vector.component.html',
  styleUrls: ['./curve-vector.component.less']
})
export class CurveVectorComponent implements OnInit {

  constructor() { }
  
  ret: Vector2D[] = [];

  @ViewChild('mainCanvas') canvasView !: ElementRef;
  @ViewChild('mainCanvas2') canvasView2 !: ElementRef;
  @ViewChild('mainCanvas3') canvasView3 !: ElementRef;
  @ViewChild('mainCanvas4') canvasView4 !: ElementRef;

  ngOnInit(): void {
    
  }
  ngAfterViewInit() : void{
    this.regularShape(250, 250, 250, 3)
    this.regularShape(500, 0, 250, 4)
    this.regularShape(450, 275, 125, 5)
    this.regularShape(188, 20, 125, 6)
    
    this.arc(250 ,125, 125)
    this.arc(250 ,300, 50)
    this.arc(250 ,375, 25)
    this.arc(250 ,412.5, 12.5)

    this.ellipse(250, 250, 250, 150)
    
    this.parabola(250, 250, 5.5, -10, 10)
  }
  draw(points: Vector2D[], ctx : any, strokeStyle = 'black', fillStyle = 'black') {
    
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();
    ctx.moveTo(...points[0]);
    
    for(let i = 1; i < points.length; i++) {
      ctx.lineTo(...points[i]);
    }
    
    ctx.closePath();
    
    if(fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }

    ctx.stroke();
  }
  // 画正多边形的函数
  regularShape(x : number, y : number, steps : number, edges = 3,) : void{
    const ret: Vector2D[] = [];
    const delta = Math.PI * 2 / edges // 获取另外顶点需要旋转的角度

    let p = new Vector2D(x, y)  // 获取起始顶点
    const dir = new Vector2D(steps, 0 ) // 定义边的长度向量

    for( let i = 0; i < edges; i++ ){ // 循环边的数量生成对应的点
      p = p.copy().add(dir.rotate( delta ))
      ret.push(p)
    }

    const canvas = this.canvasView.nativeElement;
    const ctx = canvas.getContext('2d'); 

    this.draw(ret, ctx)
  }
  // 画圆弧的函数
  arc(x0 : number, y0 : number, radius : number, startAng = 0, endAng = Math.PI * 2) : void {
    
    const TAU_SEGMENTS = 60;
    const TAU = Math.PI * 2; 
    const ang = Math.min(TAU, endAng - startAng); 
    const ret = ang === TAU ? [] : [[x0, y0]];

    const segments = Math.round(TAU_SEGMENTS * ang / TAU);

    for(let i = 0; i <= segments; i++) { 
      const x = x0 + radius * Math.cos(startAng + ang * i / segments); 
      const y = y0 + radius * Math.sin(startAng + ang * i / segments); 
      ret.push([x, y]); 
    }
    const canvas = this.canvasView2.nativeElement;
    const ctx = canvas.getContext('2d'); 
    this.draw(ret as Vector2D, ctx)

  }
  // 画圆锥曲线
  ellipse(x0 : number, y0 : number, radiusX : number, radiusY : number, startAng = 0, endAng = Math.PI * 2) : void { 
    const TAU_SEGMENTS = 60;
    const TAU = Math.PI * 2;
    const ang = Math.min(TAU, endAng - startAng); 
    const ret = ang === TAU ? [] : [[x0, y0]]; 
    const segments = Math.round(TAU_SEGMENTS * ang / TAU); 
    
    for(let i = 0; i <= segments; i++) { 
      const x = x0 + radiusX * Math.cos(startAng + ang * i / segments); 
      const y = y0 + radiusY * Math.sin(startAng + ang * i / segments); 
      ret.push([x, y]); 
    } 
    
    const canvas = this.canvasView3.nativeElement;
    const ctx = canvas.getContext('2d'); 
    this.draw(ret as Vector2D, ctx)
    
  }
  // 抛物线
  parabola(x0 : number, y0 : number, p : number, min : number, max : number) : void{ 
    
    const ret = []; 
    const LINE_SEGMENTS = 60;

    for(let i = 0; i <= LINE_SEGMENTS; i++) { 
      const s = i / 60; 
      const t = min * (1 - s) + max * s; 
      const x = x0 + 2 * p * t ** 2; 
      const y = y0 + 2 * p * t; 
      ret.push([x, y]); 
    } 

    const canvas = this.canvasView4.nativeElement;
    const ctx = canvas.getContext('2d'); 
    this.draw(ret as Vector2D, ctx, 'black', '')

  }
}
