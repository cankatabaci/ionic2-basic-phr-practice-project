import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { BloodPressPage } from '../bloodpress';

@Component({
    selector: 'page-bloodpressdetails',
    templateUrl: 'bloodpressdetails.html'
})
export class BloodPressDetailsPage {



    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
        this.navCtrl.canGoBack();

    }
}