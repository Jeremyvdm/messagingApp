import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateUserProfilePage } from './update-user-profile';

@NgModule({
  declarations: [
    UpdateUserProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateUserProfilePage),
  ],
})
export class UpdateUserProfilePageModule {}
