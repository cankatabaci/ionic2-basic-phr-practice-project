import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { BloodPressPage } from '../bloodpress';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
    selector: 'page-bloodpressdetails',
    templateUrl: 'bloodpressdetails.html'
})
export class BloodPressDetailsPage {
    todo = {
        title: '',
        description: ''
    };


    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
        this.navCtrl.canGoBack();

    }


    logForm(form) {
        if (form.value.title === "")
            console.log("null")
        console.log(form.value)
    }
}