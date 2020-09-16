import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  formGroup: FormGroup = new FormGroup({})
  @ViewChild('content') nav: NavController
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      terms: new FormControl('', [Validators.required]), 
    })
  }
  public showPassword: boolean = false;

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

  register(){
    console.log(this.formGroup)
    if(this.formGroup.valid){
      if(this.formGroup.controls['password'].value === this.formGroup.controls['cPassword'].value){
        this.createToast('Registration Successfull!')
        this.navCtrl.pop()
      } else {
        this.createToast('Password must match')
      }
    }else {
      this.createToast('Enter all field with value data.')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  createToast(msg){
    this.toastCtrl.create({
      message: msg,
    showCloseButton: true,
    closeButtonText: 'Ok',
    duration: 3000
    }).present()
  }


}
