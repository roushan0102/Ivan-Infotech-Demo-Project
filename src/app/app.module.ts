import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage } from '../pages/main/main';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule,MatCheckboxModule,MatButtonToggleModule,MatInputModule,MatButtonModule,MatGridListModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from "@angular/material";
import { TabsPage } from '../pages/tabs/tabs';
import { CartDetailsComponent } from '../components/cart-details/cart-details';
import { RegistrationPage } from '../pages/registration/registration';
import { LogicPage } from '../pages/logic/logic';


const materialModules = [  
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule
]
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    MainPage,
    CartDetailsComponent,
    LogicPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTableModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    MainPage,
    CartDetailsComponent,
    LogicPage,
    RegistrationPage
  ],
  exports: [
    ...materialModules,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
