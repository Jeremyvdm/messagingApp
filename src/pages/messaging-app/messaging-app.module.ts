import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagingAppPage } from './messaging-app';

@NgModule({
  declarations: [
    MessagingAppPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagingAppPage),
  ],
})
export class MessagingAppPageModule {}
