import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ValidatorFn,AbstractControl ,FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
import { HomePage } from '../home/home';
import {LoginPage} from '../login/login';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

    authorForm: FormGroup;
    
       constructor(public nav: NavController, public navParams: NavParams, public formBuild: FormBuilder) {
    
           this.nav = nav;
    
           this.authorForm = formBuild.group({

               id: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(4), Validators.maxLength(20)])],
               firstname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
               lastname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
               //password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
              // npassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
              password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
              re_password: new FormControl('', [Validators.required,this.equalto('password')])
               
           });
       }

       

       equalto(field_name): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
        
        let input = control.value;
        
        let isValid=control.root.value[field_name]==input
        if(!isValid) 
        return { 'equalTo': {isValid} }
        else 
        return null;
        };
        }
    
       onSubmit(value: any): void { 
           if(this.authorForm.valid) {
               
               window.localStorage.setItem('id',value.id);
               window.localStorage.setItem('firstname', value.firstname);
               window.localStorage.setItem('lastname', value.lastname);               
              // window.localStorage.setItem('password', value.password);
              // window.localStorage.setItem('npassword', value.npassword);
              window.localStorage.setItem('password', value.password);
              window.localStorage.setItem('re_password', value.re_password);
                                    
            
               this.nav.push(HomePage);                        
           }
       }   
  
      log(){
          this.nav.push(LoginPage);
      }
   }