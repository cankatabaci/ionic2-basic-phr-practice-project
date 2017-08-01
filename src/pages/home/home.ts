import { Component, ViewChild, animate } from '@angular/core';
import { NavController, Content, AlertController } from 'ionic-angular';
import { BloodSugarPage } from '../bloodsugar/bloodsugar';
import { BloodPressPage } from '../bloodpress/bloodpress';
import { WeightPage } from '../weight/weight';
import { NotesPages } from '../notes/notes';
import 'web-animations-js/web-animations.min';
import { BloodSugarDetailsPage } from '../bloodsugar/bloodsugardetails/bloodsugardetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  testRadioOpen = false;
  testRadioResult: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    //this.navCtrl.setRoot(HomePage);
  }

  add() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Choose for Record');

    alert.addInput({
      type: 'radio',
      label: 'BloodSugar',
      value: 'bloodsugar',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'BloodPressure',
      value: 'bloodpress'
    });

    alert.addInput({
      type: 'radio',
      label: 'Height',
      value: 'height'
    });

    alert.addInput({
      type: 'radio',
      label: 'Weight',
      value: 'weight'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        switch (data) {
          case 'bloodsugar': {
            this.navCtrl.push(BloodSugarDetailsPage); 
            break;
          }
          case 'bloodpress': {
            //statements; 
            break;
          }
          default: {
            //statements; 
            break;
          }
        }
      }
    });

    alert.present();
  }

  Item1() {
    console.log("click");
    this.navCtrl.push(BloodSugarPage);
  }
  Item2() {
    console.log("click");
    this.navCtrl.push(BloodPressPage);
  }
  Item3() {
    console.log("click");
    this.navCtrl.push(WeightPage);
  }
  Item4() {
    console.log("click");
    this.navCtrl.push(BloodSugarPage);
  }
  Item5() {
    console.log("click");
    this.navCtrl.push(NotesPages);
  }

}
