import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BloodSugarPage } from '../pages/bloodsugar/bloodsugar';
import { BloodPressPage } from '../pages/bloodpress/bloodpress';
import { WeightPage } from '../pages/weight/weight';
import { NotesPages } from '../pages/notes/notes';
import { DataTableModule } from "angular2-datatable";
import { BloodSugarDetailsPage } from '../pages/bloodsugar/bloodsugardetails/bloodsugardetails';
import { BloodPressDetailsPage } from '../pages/bloodpress/bloodpressdetails/bloodpressdetails';
import { HeightDetailsPage } from '../pages/height/heightdetails/heightdetails';
import { WeightDetailsPage } from '../pages/weight/weightdetails/weightdetails';
import { DatePicker } from '@ionic-native/date-picker';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BloodSugarPage,
    WeightPage,
    BloodPressPage,
    NotesPages,
    BloodSugarDetailsPage,
    BloodPressDetailsPage,
    HeightDetailsPage,
    WeightDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DataTableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BloodSugarPage,
    WeightPage,
    BloodPressPage,
    NotesPages,
    BloodSugarDetailsPage,
    BloodPressDetailsPage,
    HeightDetailsPage,
    WeightDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatePicker
  ]
})
export class AppModule { }
