import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { HeightPage } from '../height';

@Component({
    selector: 'page-heightdetails',
    templateUrl: 'heightdetails.html'
})
export class HeightDetailsPage {



    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
        this.navCtrl.canGoBack();

    }
}