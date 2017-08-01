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
  items: ItemDesign[];
  item: ItemDesign = { age: "", city: "", email: "", name: "" };
  name?: any = "";
  age?: any = "";
  email?: any = "";
  city?: any = "";

  constructor(private platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, private toastCtrl: ToastController) {



    this.navCtrl.canGoBack();
    this.items = [{ age: "asd", city: "adasd", email: "asd", name: "adasd" }, { age: "qwwe", city: "qwe", email: "qweqe", name: "qweqwe" }];
    this.age = navParams.get("age");
    this.city = navParams.get("city");
    this.email = navParams.get("email");
    this.name = navParams.get("name");

    if (this.age == undefined) {

    } else {
      console.log(this.age, this.email, this.name, this.city);
      this.item.age = this.age;
      this.item.city = this.city;
      this.item.email = this.email;
      this.item.name = this.name;
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

  pushItems(data: ItemDesign) {
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
export interface ItemDesign {
  name: string;
  email: string;
  age: string;
  city: string;
}
