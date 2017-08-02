import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { BloodSugarPage } from '../bloodsugar';

@Component({
    selector: 'page-bloodsugardetails',
    templateUrl: 'bloodsugardetails.html'
})
export class BloodSugarDetailsPage {
    items: ItemDesign = { age: "", city: "", email: "", name: "" };


    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
        this.navCtrl.canGoBack();

    }

    AddRecord() {
        this.navParams.data = {
            age: this.items.age,
            city: this.items.city,
            email: this.items.email,
            name: this.items.name,
        }
        this.navCtrl.push(BloodSugarPage,this.navParams.data);
    }

}
export interface ItemDesign {
    name?: string;
    email?: string;
    age?: string;
    city?: string;
}
