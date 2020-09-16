import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProductModel } from '../../pages/main/main';

/**
 * Generated class for the CartDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cart-details',
  templateUrl: 'cart-details.html'
})
export class CartDetailsComponent {

  text: string;
  productList: ProductModel[] = []
  totalAmmount:number = 0
  constructor(public dialogRef: MatDialogRef<CartDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductModel[]) {
    console.log('Hello CartDetailsComponent Component');
    console.log(data)
    this.productList = data
    this.calulateTotalAmount()
  }

  calulateTotalAmount(){
    for (let index = 0; index < this.productList.length; index++) {
      const element = this.productList[index];

      if(element.selectedProduct > 0)
      this.totalAmmount = this.totalAmmount + (element.discountPrice * element.selectedProduct);
    }
    Math.floor(this.totalAmmount)
  }


}
