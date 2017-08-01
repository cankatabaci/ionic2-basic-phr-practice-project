import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { BloodSugarPage } from '../bloodsugar';

@Component({
    selector: 'page-bloodsugardetails',
    templateUrl: 'bloodsugardetails.html'
})
export class BloodSugarDetailsPage {
    items: ItemDesign = { age: "", city: "", email: "", name: "" };
    name?: any = "";
    age?: any = "";
    email?: any = "";
    city?: any = "";


    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
        this.navCtrl.canGoBack();

    }

    AddRecord() {
        this.items.age = this.age;
        this.items.city = this.city;
        this.items.email = this.email;
        this.items.name = this.name;

        this.navParams.data = {
            age: this.items.age,
            city: this.items.city,
            email: this.items.email,
            name: this.items.name,
        }
        console.log(this.age, this.email, this.name, this.city);
        this.navCtrl.push(BloodSugarPage,this.navParams.data);
    }

}
export interface ItemDesign {
    name?: string;
    email?: string;
    age?: string;
    city?: string;
}
