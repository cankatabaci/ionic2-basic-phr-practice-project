import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { WeightPage } from '../weight';

@Component({
    selector: 'page-weightdetails',
    templateUrl: 'weightdetails.html'
})
export class WeightDetailsPage {



    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
        this.navCtrl.canGoBack();

    }
}