import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the UserServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServicesProvider {

  constructor(private afDatabase : AngularFireDatabase) {
  }

  findUserFromDatabase(userId : any){
    var userProfiles = this.afDatabase.database.ref('userProfile');
    var userProfileJson = userProfiles.child(userId)
    return userProfileJson.once('value');
  }

}
