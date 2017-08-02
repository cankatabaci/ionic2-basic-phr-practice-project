import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, Platform, Navbar, ToastController } from 'ionic-angular';
import { BloodSugarDetailsPage } from '../bloodsugar/bloodsugardetails/bloodsugardetails';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-bloodsugar',
  templateUrl: 'bloodsugar.html'
})
export class BloodSugarPage {
  @ViewChild('navbar') navBar: Navbar;
  notes: any = [];
  items: IBloodSugar[];
  item: IBloodSugar = { value: 0, day: "", date: "", bloodsugarid: 0, isactive: true };


  constructor(private platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, private toastCtrl: ToastController) {



    this.navCtrl.canGoBack();
    this.items = [{ value: 22, day: "Pazartesi", date: "01-08-2017"}, { value: 35, day: "Salı", date: "01-08-2017"}];
    this.item.value = navParams.get("value");
    this.item.day = navParams.get("day");
    this.item.date = navParams.get("date");

    if (this.item.day == undefined) {

    } else {
      this.pushItems(this.item);
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



  ionViewDidLoad() {
    this.navBar.backButtonClick = () => {
      ///here you can do wathever you want to replace the backbutton event
      this.navCtrl.push(HomePage);
    };
  }

  pushItems(data: IBloodSugar) {
    this.items.push(data);
    this.presentToast("Kayıt Eklendi!");
  }

  deleteSugar(item) {
    var index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.presentToast("Kayıt Silindi!");
  }



}
export interface IBloodSugar {
  bloodsugarid?: number;
  value?: number;
  day?: string;
  isactive?: boolean;
  date?: string;
}