import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebglSampleComponent } from './webgl-sample/webgl-sample.component'
import { SvgHtmlCssComponent } from './svg-html-css/svg-html-css.component'
import { RoughSampleComponent } from './rough-sample/rough-sample.component'
import { VectorTreeComponent } from './vector-tree/vector-tree.component'
import { CurveVectorComponent } from './curve-vector/curve-vector.component'

const routes: Routes = [
  { path: '', redirectTo: '/svg-html-css', pathMatch: 'full' },
  {
    path: 'wegl-sample',
    component: WebglSampleComponent
  },
  {
    path: 'svg-html-css',
    component: SvgHtmlCssComponent
  },
  {
    path: 'rough-sample',
    component: RoughSampleComponent
  },
  {
    path: 'vector-tree',
    component: VectorTreeComponent
  },
  {
    path: 'curve-vector',
    component: CurveVectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
