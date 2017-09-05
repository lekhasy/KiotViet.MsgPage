import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'

import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { MessengerPageComponent } from '../messenger/messenger-page/messenger-page.component';
import { SettingPageComponent } from '../user-preferences/setting-page/setting-page.component';

import { UserPreferencesModule } from '../user-preferences/user-preferences.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ]
})
export class ApprouteModule {

  private static appRoutes: Routes = [
    { path: 'messenger', component: MessengerPageComponent },
    { path: 'settings', component: SettingPageComponent },
    {
      path: '',
      redirectTo: '/messenger',
      pathMatch: 'full',
      data: { title: 'Messenger' }
    },
    // { path: '/messenger', component: PageNotFoundComponent }
  ];

  public static GetAppRoute(): Routes {
    return ApprouteModule.appRoutes;
  }
}