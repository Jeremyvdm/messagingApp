import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';


import { UserServicesProvider } from '../../providers/user-services/user-services';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  userName : string;
  firstName : string;
  lastName : string;
  address : string;
  birthDate : string; 

  constructor(private afAuth : AngularFireAuth,
    private userService : UserServicesProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
    this.afAuth.authState.subscribe(auth => {
      if(auth.email && auth.uid){
        var userid = auth.uid;
        this.userService.findUserFromDatabase(userid).then(snapshot =>{
          this.userName = snapshot.val().userName;
          this.firstName = snapshot.val().firstName;
          this.lastName = snapshot.val().lastName;
          this.address = snapshot.val().address;
          this.birthDate = snapshot.val().birthDate;
        })
      }
    })
  }

  updateProfile(){
    this.navCtrl.push('UpdateUserProfilePage')
  }

}
