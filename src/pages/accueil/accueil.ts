import { Component } from '@angular/core';

import { User } from '../../app/providers/global';

import { NavController } from 'ionic-angular';

/*
  Generated class for the Accueil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {
  User: any = Object();

  constructor(public navCtrl: NavController) {
    this.User.name = User.name;
    this.User.surname = User.surname;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

}
