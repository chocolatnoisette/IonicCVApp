import { Component } from '@angular/core';

import { User } from '../../app/providers/global';

import { NavController, IonicApp } from 'ionic-angular';

import { a}

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

  constructor(public app, public navCtrl: NavController) {
    this.User.name = User.name;
    this.User.surname = User.surname;
  }
  goToPage(page) {
    let nav = this.app.getComponent('nav');

    nav.push(page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

}
