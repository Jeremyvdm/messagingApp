import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the UpdateUserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-user-profile',
  templateUrl: 'update-user-profile.html',
})
export class UpdateUserProfilePage {
  constructor(private afAuth : AngularFireAuth, private afDatabase : AngularFireDatabase, 
    private toastCtrl : ToastController,
    public navCtrl: NavController, public navParams: NavParams ) {
  }

  updateInfo(type : string, newItem : string){
    this.afAuth.authState.subscribe(auth => {
      if(auth.email && auth.uid){
        var update = {}
        switch(type){
          case "email":
            auth.updateEmail(newItem);
          break;
          case "password":
            auth.updatePassword(newItem);
          break;
          case "userName":
            update[`userProfile/${auth.uid}/userName`] = newItem;
          break;
          case "firstName":
            update[`userProfile/${auth.uid}/firstName`] = newItem;
          break;
          case "lastName":
            update[`userProfile/${auth.uid}/lastName`] = newItem;
          break;
          case "birthDate":
            update[`userProfile/${auth.uid}/birthDate`] = newItem;
          break;
          case "address":
            update[`userProfile/${auth.uid}/address`] = newItem;
          break;
          }
          this.afDatabase.database.ref().update( update);
          this.toastCtrl.create({
            message: `the field ${type} has been updated`,
            duration: 3000
          }).present();
        
      }
    })
  }



}
