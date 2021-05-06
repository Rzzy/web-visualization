import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgHtmlCssComponent } from './svg-html-css/svg-html-css.component';
import { WebglSampleComponent } from './webgl-sample/webgl-sample.component';
import { RoughSampleComponent } from './rough-sample/rough-sample.component';
import { VectorTreeComponent } from './vector-tree/vector-tree.component';
import { CurveVectorComponent } from './curve-vector/curve-vector.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgHtmlCssComponent,
    WebglSampleComponent,
    RoughSampleComponent,
    VectorTreeComponent,
    CurveVectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
