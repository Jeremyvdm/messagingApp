import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProfile } from '../../models/userProfile';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  userProfile = {} as UserProfile;
  constructor(private afAuth : AngularFireAuth, private afDatabase : AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams ) {
  }

  async register(user : User, userProfile : UserProfile){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      if(result){
        console.log(result)
         this.afAuth.authState.subscribe(auth => {
           this.afDatabase.object(`userProfile/${auth.uid}`).set(this.userProfile);
         })
      }
    }
    catch(e){
      console.log(e);
    }
  }

}
