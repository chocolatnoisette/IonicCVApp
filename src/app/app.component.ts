import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AccueilPage } from '../pages/accueil/accueil';
import { CompetencesPage } from '../pages/competences/competences';
import { ParcoursPage } from '../pages/parcours/parcours';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AccueilPage;

  User: any = Object();

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: AccueilPage },
      { title: 'Compétences', component: CompetencesPage },
      { title: 'Parcours', component: ParcoursPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.User.name = "Martin";
      this.User.surname = "Joss";
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
