import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MessengerPageComponent } from './messenger/messenger-page/messenger-page.component';
import { SettingPageComponent } from './user-preferences/setting-page/setting-page.component';

import { UserPreferencesModule } from './user-preferences/user-preferences.module';

const appRoutes: Routes = [
  { path: 'messenger', component: MessengerPageComponent },
  { path: 'settings', component: SettingPageComponent },
  {
    path: '',
    redirectTo: '/messenger',
    pathMatch: 'full',
    data: { title: 'Messenger' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}