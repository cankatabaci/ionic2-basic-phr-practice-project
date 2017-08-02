import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BloodSugarPage } from '../bloodsugar';

@Component({
    selector: 'page-bloodsugardetails',
    templateUrl: 'bloodsugardetails.html'
})
export class BloodSugarDetailsPage {
    items: IBloodSugar = { day: "", date: "", bloodsugarid: 0, isactive: true };
    tarih: DateBase = { day: "", month: "", year: "" };
    error: string;
    myForm: FormGroup;
    num: number[] = [];



    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, private toastCtrl: ToastController, private builder: FormBuilder) {
        this.navCtrl.canGoBack();
        var i: number;
        var j:number = 0; 
        for (i = j; i <200; i++) {
            this.num.push(i);
        }
        console.log(this.num);

    }


    AddRecord() {

        if (this.items.value == undefined || this.items.day == "") {
            this.presentToast("Only blank spaces are not allowed!");
        } else {
            this.navParams.data = {
                value: this.items.value,
                day: this.items.day,
                date: this.items.date,
            }
            this.navCtrl.push(BloodSugarPage, this.navParams.data);

        }
    }

    presentToast(msj) {
        let toast = this.toastCtrl.create({
            message: msj,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

}
export interface IBloodSugar {
    bloodsugarid?: number;
    value?: number;
    day?: string;
    isactive?: boolean;
    date?: string;
}

export interface DateBase {
    day?: string;
    month?: string;
    year?: string;
}
