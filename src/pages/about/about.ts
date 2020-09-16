import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tile = {
    sidemenu: { cols: 2, rows: 1.75 },
    title: { cols: 8, rows: 1.75 },
    cart: { cols: 2, rows: 1.75},
    category: { cols: 4, rows: 1.75},
    search: { cols: 8, rows: 1.75},
  };
  constructor(public navCtrl: NavController) {

  }

}
