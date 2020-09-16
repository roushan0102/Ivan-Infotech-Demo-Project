import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationPage } from './registration';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPage),
    MatCheckboxModule
  ],
})
export class RegistrationPageModule {}
