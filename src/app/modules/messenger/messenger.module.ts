import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { MessengerPageComponent } from './messenger-page/messenger-page.component';

import { MdListModule } from '@angular/material';
import { PeopleItemComponent } from './people-item/people-item.component';

@NgModule({
  imports: [
    CommonModule,
    MdListModule
  ],
  declarations: [PeopleListComponent, MessagePanelComponent, MessengerPageComponent, PeopleItemComponent]
})
export class MessengerModule { }
