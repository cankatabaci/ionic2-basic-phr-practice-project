import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import { UserLogin } from '../../interfaces/User';
import 'web-animations-js/web-animations.min';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    login: UserLogin = { username: '', password: '' };
    submitted = false;

    constructor(public navCtrl: NavController) {

    }

    Login() {
        console.log(this.login.password,this.login.username);
        this.navCtrl.push(HomePage);
    }

}
