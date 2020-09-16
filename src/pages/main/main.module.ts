import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatGridListModule, MatInputModule, MatButtonToggleModule, MatCheckboxModule, MatTableModule } from "@angular/material";
@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    MatGridListModule,
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
})
export class MainPageModule {}
