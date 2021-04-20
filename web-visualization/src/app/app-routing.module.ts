import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebglSampleComponent } from './webgl-sample/webgl-sample.component'
import { SvgHtmlCssComponent } from './svg-html-css/svg-html-css.component'
const routes: Routes = [
  { path: '', redirectTo: '/svg-html-css', pathMatch: 'full' },
  {
    path: 'wegl-sample',
    component: WebglSampleComponent
  },
  {
    path: 'svg-html-css',
    component: SvgHtmlCssComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
