import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CartDetailsComponent } from '../../components/cart-details/cart-details';

interface CategoriesModel { 
  id: number,
  name: string,
  select?: boolean
}

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  
  tile = {
    sidemenu: { cols: 2, rows: 1.75 },
    title: { cols: 8, rows: 1.75 },
    cart: { cols: 2, rows: 1.75},
    category: { cols: 4, rows: 1.75},
    search: { cols: 8, rows: 1.75},
  };

  totalSelectedProduct: number = 0
  
  options: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public dialog: MatDialog
  ) {
    this.filteredProductList = this.productList;
    this.findDiscountPrice()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  addProductToCart(index: number){
    this.filteredProductList[index].selectedProduct = 1
    this.totalSelectedProduct++
    let i = this.productList.findIndex(element =>{
      return element.productId === this.filteredProductList[index].productId
    }
    )
    if(i !== -1){
      this.productList[i].selectedProduct = 1
    }
  }

  addCartProductvalue(index: number){
    if(this.filteredProductList[index].maximumOrderValue === this.filteredProductList[index].selectedProduct){
      this.createToast('Maximum allowed product are ' + this.filteredProductList[index].maximumOrderValue)
      return
    }
    this.filteredProductList[index].selectedProduct++
    this.totalSelectedProduct++

    let i = this.productList.findIndex(element =>{
      return element.productId === this.filteredProductList[index].productId
    }
    )
    if(i !== -1){
      this.productList[i].selectedProduct = this.filteredProductList[index].selectedProduct
    }
    
  }

  substractCartProductvalue(index: number){
    this.filteredProductList[index].selectedProduct--
    this.totalSelectedProduct--
    let i = this.productList.findIndex(element =>{
      return element.productId === this.filteredProductList[index].productId
    }
    )
    if(i !== -1){
      this.productList[i].selectedProduct = this.filteredProductList[index].selectedProduct
    }
  }


  findDiscountPrice(){
    this.totalSelectedProduct = 0
    for (let index = 0; index < this.filteredProductList.length; index++) {
      const element = this.filteredProductList[index];
      this.filteredProductList[index].savedAmount = (element.productMrp/100)* element.productDiscount
      this.filteredProductList[index].discountPrice = element.productMrp - this.filteredProductList[index].savedAmount
      this.filteredProductList[index].selectedProduct = 0
    }

    for (let index = 0; index < this.productCategories.length; index++) {
      const element = this.productCategories[index];
      if(index ===0){
        this.productCategories[index].select = true
      } else {
        this.productCategories[index].select = false
      }
      
    }

  }

  proceedToCheckou(){
    if(this.totalSelectedProduct < 1){
      this.createToast('Cart in empty, please add atleast one product to proceed.')
    }
    else {
      this.createToast('Total '+ this.totalSelectedProduct+ ' has been ordered')
      console.log(this.productList)
      this.openDialog()
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CartDetailsComponent, {
      height: '90%',
      data: this.productList
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  filterProductByCatogeries(cId: number, i: number){
    for (let index = 0; index < this.productCategories.length; index++) {
      const element = this.productCategories[index];
      if(index ===i){
        this.productCategories[index].select = true
      } else {
        this.productCategories[index].select = false
      }
    }


    if(cId === 0){
      this.filteredProductList = this.productList;
    } else {
      this.filteredProductList = this.productList.filter( (item) => {
        return item.category === cId
      })
    }

    


  }

  createToast(msg){
    this.toastCtrl.create({
      message: msg,
    showCloseButton: true,
    closeButtonText: 'Ok',
    duration: 3000
    }).present()
  }


  filteredProductList: ProductModel[] = []
  productList: ProductModel[] = [
    {
      productId: 'P1',
      productName: 'Fortune Refined Soybean Oil 1 L (Pouch)',
      productImg: 'assets/productimg/fortune.jpeg',
      productMrp: 135,
      productDiscount: 20,
      category: 2,
      maximumOrderValue: 10
    },
    {
      productId: 'P2',
      productName: 'Fortune Refined Sunflower Oil 1 L (Pouch)',
      productImg: 'assets/productimg/fortune.jpeg',
      productMrp: 130,
      productDiscount: 1,
      category: 3,
      maximumOrderValue: 10
    },
    {
      productId: 'P3',
      productName: 'Fortune Refined Soybean Oil 1 L (Pouch)',
      productImg: 'assets/productimg/fortune.jpeg',
      productMrp: 135,
      productDiscount: 20,
      category: 2,
      maximumOrderValue: 10
    },
    {
      productId: 'P4',
      productName: 'Fortune Refined Sunflower Oil 1 L (Pouch)',
      productImg: 'assets/productimg/fortune.jpeg',
      productMrp: 130,
      productDiscount: 1,
      category: 3,
      maximumOrderValue: 10
    },
    {
      productId: 'P5',
      productName: 'Fortune Refined Soybean Oil 1 L (Pouch)',
      productImg: 'assets/productimg/fortune.jpeg',
      productMrp: 135,
      productDiscount: 20,
      category: 2,
      maximumOrderValue: 10
    },
    {
      productId: 'P6',
      productName: 'Fortune Refined Sunflower Oil 1 L (Pouch)',
      productImg: 'assets/productimg/fortune.jpeg',
      productMrp: 130,
      productDiscount: 1,
      category: 3,
      maximumOrderValue: 10
    }
  ]
  productCategories: CategoriesModel[] = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Blended Oil',
    },
    {
      id: 2,
      name: 'Edible Oil'
    },
    {
      id: 3,
      name: 'Groceries'
    },
    {
      id: 4,
      name: 'Others'
    }
  ]
}

export interface ProductModel {
  productId: String;
  productName: String;
  productImg: String;
  productMrp: number;
  productDiscount: number;
  sodexEligible?: Boolean;
  category: number,
  selectedProduct?: number,
  discountPrice? :number,
  savedAmount? : number,
  maximumOrderValue: number
}
