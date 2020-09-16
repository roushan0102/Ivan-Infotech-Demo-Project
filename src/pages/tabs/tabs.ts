import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MainPage } from '../main/main';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
