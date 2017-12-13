import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
import { HomePage } from '../home/home';
import{SignupPage} from '../signup/signup';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  authForm: FormGroup;
  
     constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  
         this.nav = nav;
  
         this.authForm = formBuilder.group({
             username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
             password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
         });
     }
  
        onSubmit(value: any): void { 
            if(this.authForm.valid) {
                window.localStorage.setItem('username', value.username);
                window.localStorage.setItem('password', value.password);
    
                this.nav.push(HomePage);
            }
     }   

    sign(){
        this.nav.push(SignupPage);
    }
 }