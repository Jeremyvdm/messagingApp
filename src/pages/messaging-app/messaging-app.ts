import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';

import { UserServicesProvider } from '../../providers/user-services/user-services';

/**
 * Generated class for the MessagingAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messaging-app',
  templateUrl: 'messaging-app.html',
})
export class MessagingAppPage {

  userName : string;

  constructor(private afAuth : AngularFireAuth, 
    private userService : UserServicesProvider, private toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagingAppPage');
    this.afAuth.authState.subscribe(auth => {
      if(auth.email && auth.uid){
        var userid = auth.uid;
        this.userService.findUserFromDatabase(userid).then(snapshot =>{
          this.userName = snapshot.val().userName
        })
        this.toastCtrl.create({
          message: `Welcome to familly messaging app ${auth.email}`,
          duration: 3000
        }).present();


      }else{
        this.toastCtrl.create({
          message: `could not find your identification detail`,
          duration: 3000
        }).present();
      }
    })
  }

  gotToUserProfile(){
    this.navCtrl.push('UserProfilePage')
  }

}
