import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rough-sample',
  templateUrl: './rough-sample.component.html',
  styleUrls: ['./rough-sample.component.less']
})
export class RoughSampleComponent implements OnInit {

  @ViewChild('mainCanvas') canvasView !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() : void {
    this.drawPicture()
  }
  drawPicture() : void{
    const canvas = this.canvasView.nativeElement
    //const rc : RoughCanvas = rough.canvas(canvas)
    const rc = rough.canvas(canvas);
    const hillOpts = {roughness: 2.8, strokeWidth: 2, fill: 'blue'};
    rc.path('M76 256L176 156L276 256', hillOpts);
    rc.path('M236 256L336 156L436 256', hillOpts);
    rc.circle(256, 106, 105, { stroke: 'red', strokeWidth: 4, fill: 'rgba(255, 255, 0, 0.4)', fillStyle: 'solid',});
  }
}
