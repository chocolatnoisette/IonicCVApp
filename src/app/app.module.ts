import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { CompetencesPage } from '../pages/competences/competences';
import { ParcoursPage } from '../pages/parcours/parcours';

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    CompetencesPage,
    ParcoursPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    CompetencesPage,
    ParcoursPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
