import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-webgl-sample',
  templateUrl: './webgl-sample.component.html',
  styleUrls: ['./webgl-sample.component.less']
})
export class WebglSampleComponent implements OnInit {
  @ViewChild('mainCanvas') canvasView !: ElementRef;
  scale:number = 0.99  
  isnormalcolor:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.drawTriangle() 
  }
  halfSizeTriangle(): void{
    // 将 gl_Position = vec4(position, 1.0, 1.0); 修改为 gl_Position = vec4(position * 0.5, 1.0, 1.0);
    this.scale = this.scale / 2
    this.drawTriangle() 
  }
  clickMe(): void {
    this.scale = this.scale * 2
    this.drawTriangle()
  }
  reset(){
    this.scale = 0.99
    this.isnormalcolor = false
    this.drawTriangle() 
  }
  changeColor(): void {
    this.isnormalcolor = !this.isnormalcolor
    this.drawTriangle()
  }
  drawTriangle(): void {
    //1、 创建 WebGL 上下文
    const canvas = this.canvasView.nativeElement
    const gl = canvas.getContext('webgl');
   // 2、 创建 WebGL 程序
   const vertex: string = ` 
        attribute vec2 position; 
        varying vec3 color;
        void main() { 
          gl_PointSize = 1.0; 
          color = ${this.isnormalcolor ? 'vec3(0.5 + position * 0.5, 0.0)' : 'vec3(1.0, 0.0, 0.0)' };
          gl_Position = vec4(position * ${ this.scale }, 1.0, 1.0);  
        }`; // 顶点着色器 
   const fragment: string = `
        precision mediump float; 
        varying vec3 color;
        void main() { 
          gl_FragColor = vec4(color, 1.0); 
        } `; // 片元着色器

   // 将着色器代码片段创建成shader对象 
   const vertexShader = gl.createShader(gl.VERTEX_SHADER);

   gl.shaderSource(vertexShader, vertex);
   gl.compileShader(vertexShader);
   
   const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
   gl.shaderSource(fragmentShader, fragment);
   gl.compileShader(fragmentShader);

   // 创建webGLProgram对象 ，并将两个shader对象添加到WebGL程序
   const program = gl.createProgram();
   gl.attachShader(program, vertexShader);
   gl.attachShader(program, fragmentShader);
   gl.linkProgram(program);
   
   // 使用useProgram启用webGLProgram对象
   gl.useProgram(program);

   // 3、将数据存入缓冲区
   const points = new Float32Array([ -1, -1, 0, 1, 1, -1,]); // WebGL 使用的数据需要用类型数组定义，默认格式是 Float32Array
   
   // 将定义好的数据写入缓冲区
   const bufferId = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
   gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

   // 4、将缓冲区数据读取到 GPU
   const vPosition = gl.getAttribLocation(program, 'position'); // 获取顶点着色器中的position变量的地址
   gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0); // 给变量设置长度和类型
   gl.enableVertexAttribArray(vPosition); // 激活这个变量

   // 5、执行着色器程序完成绘制
   gl.clear(gl.COLOR_BUFFER_BIT); // 清除画布的内容
   gl.drawArrays(gl.TRIANGLES, 0, points.length / 2); // 选择 gl.TRIANGLES 表示以三角形为图元绘制，再传入绘制的顶点偏移量和顶点数量，WebGL 就会将对应的 buffer 数组传给顶点着色器，并且开始绘制

  }

}
