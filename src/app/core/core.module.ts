import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
  imports: [],
  declarations: [],
  exports: [NgMaterialModule, BrowserAnimationsModule]
})
export class CoreModule {
  // /**
  //  *
  //  */
  // constructor(@Optional() @SkipSelf() parentModule : any){
  //   this.throwIfAlreadyLoaded(parentModule, CoreModule.name);
  // }

  // private throwIfAlreadyLoaded(parentModule : any, moduleName: string) : void {
  //   // app module don't have parent module
  //   if(parentModule){
  //     throw new Error('${moduleName} has already been loaded. Import Core modules in the AppModule only.');
  //   }
  // }
}
