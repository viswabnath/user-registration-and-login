import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
  
import { LoginPage } from '../login/login';
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
    username: string;
    public data: any;
    public dateTime : any = ''; 
  
    constructor(public nav: NavController) {
        this.nav = nav;
        this.username = window.localStorage.getItem('username');
        {
            this.dateTime = new Date();
          }
    }
 
    logout() {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');
 
        this.nav.setRoot(LoginPage);
        this.nav.popToRoot();         
    }    
}