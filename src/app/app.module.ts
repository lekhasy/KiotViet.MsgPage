import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MessengerModule } from './messenger/messenger.module';
import { UserPreferencesModule } from './user-preferences/user-preferences.module';
import { CoreModule } from './core/core.module';
import { NgMaterialModule } from './core/ng-material/ng-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    CoreModule,
    AppRoutingModule,
    MessengerModule,
    UserPreferencesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
