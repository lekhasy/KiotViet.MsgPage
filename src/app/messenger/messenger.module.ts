import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { MessengerPageComponent } from './messenger-page/messenger-page.component';

import { PeopleItemComponent } from './people-item/people-item.component';
import { MessageService } from './message.service';
import { NgMaterialModule } from '../core/ng-material/ng-material.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeopleListComponent, MessagePanelComponent, MessengerPageComponent, PeopleItemComponent],
  providers: [MessageService]
})
export class MessengerModule { }
