import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMaterialModule } from './ng-material/ng-material.module';


@NgModule({
  imports: [ ],
  declarations: [],
  exports: [NgMaterialModule, BrowserAnimationsModule]
})
export class CoreModule { }