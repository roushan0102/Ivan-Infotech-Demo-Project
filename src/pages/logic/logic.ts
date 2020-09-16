import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logic',
  templateUrl: 'logic.html',
})
export class LogicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.processData()
    this.findMonthWiseIncome()

  }

  ionViewDidLoad() {

  }

  sortedData: any[] = [];

  resultQuestion1: any[] = []

  resultQuestion1part2: any[] = []
  obj: MonthlyWiseDataModel[] = []
  processData() {
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      var temp = element.date.split('-')
      this.data[index].parsedDate = new Date(Number(temp[2]), Number(temp[1]) - 1, Number(temp[0]))
    }
    console.log(this.data)
    let string = JSON.stringify(this.data);
    this.sortedData = JSON.parse(string);
    this.sortedData.sort(this.sortDataByvalue)
    console.log(this.sortedData)

  }

  months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  findMonthWiseIncome() {
    this.data.sort(this.sortDataByDate)
    console.log(this.data)
    let tempMonthData: MonthlyWiseDataModel



    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      var tempMonth = element.parsedDate.getMonth()
      var tempValue = element.earning_amount

      tempMonthData = {
        amount: element.earning_amount,
        month: tempMonth,
        monthValue: this.months[tempMonth],
        year: element.parsedDate.getFullYear()
      }
      this.obj.push(tempMonthData)
    }


    var holder = {};
    var holder1 = {};

    this.obj.forEach(function (d) {
      if (holder.hasOwnProperty(d.month)) {
        holder[d.month] = holder[d.month] + d.amount;
      } else {
        holder[d.month] = d.amount;
      }
    });

    for (var prop in holder) {
      this.resultQuestion1.push({ month: prop, amount: holder[prop] });
    }

    this.obj.forEach(function (d) {
      if (holder1.hasOwnProperty(d.year)) {
        holder1[d.year] = holder1[d.year] + d.amount;
      } else {
        holder1[d.year] = d.amount;
      }
    });

    for (var prop in holder1) {
      this.resultQuestion1part2.push({ year: prop, amount: holder1[prop] });
    }

    console.log(this.resultQuestion1)
    console.log(this.resultQuestion1part2)
  }

  sortDataByDate(a, b) {
    return a.date - b.date
  }

  sortDataByvalue(a, b) {
    return a.earning_amount - b.earning_amount
  }

  findMinValue(data) {
    var lowest = Number.POSITIVE_INFINITY;
    var highest = Number.NEGATIVE_INFINITY;
    var tmp;
    for (var i = data.length - 1; i >= 0; i--) {
      tmp = data[i].amount;
      if (tmp < lowest) lowest = tmp;
      if (tmp > highest) highest = tmp;
    }
    return lowest
  }

  findMaxValue(data) {
    var lowest = Number.POSITIVE_INFINITY;
    var highest = Number.NEGATIVE_INFINITY;
    var tmp;
    for (var i = data.length - 1; i >= 0; i--) {
      tmp = data[i].amount;
      if (tmp < lowest) lowest = tmp;
      if (tmp > highest) highest = tmp;
    }
    return highest
  }





  data: EmpModel[] = [
    { "name": "John Doe", "earning_amount": 1250, "date": "01-01-2020" },
    { "name": "John Doe", "earning_amount": 1050, "date": "01-01-2020" },
    { "name": "John Doe", "earning_amount": 10, "date": "01-01-2020" },
    { "name": "John Doe", "earning_amount": 9850, "date": "03-02-2020" },
    { "name": "John Doe", "earning_amount": 950, "date": "10-04-2020" },
    { "name": "John Doe", "earning_amount": 1450, "date": "21-04-2020" },
    { "name": "John Doe", "earning_amount": 2500, "date": "15-04-2020" },
    { "name": "John Doe", "earning_amount": 850, "date": "12-05-2020" },
    { "name": "John Doe", "earning_amount": 750, "date": "23-06-2020" },
    { "name": "John Doe", "earning_amount": 750, "date": "23-06-2020" },
    { "name": "John Doe", "earning_amount": 750, "date": "23-06-2020" },
    { "name": "John Doe", "earning_amount": 650, "date": "21-07-2020" },
    { "name": "John Doe", "earning_amount": 900, "date": "12-08-2020" },
    { "name": "John Doe", "earning_amount": 850, "date": "02-09-2020" },
    { "name": "John Doe", "earning_amount": 850, "date": "02-09-2020" },
    { "name": "John Doe", "earning_amount": 850, "date": "02-09-2020" },
    { "name": "John Doe", "earning_amount": 750, "date": "15-10-2020" },
    { "name": "John Doe", "earning_amount": 900, "date": "21-10-2020" },
    { "name": "John Doe", "earning_amount": 400, "date": "12-11-2020" },
    { "name": "John Doe", "earning_amount": 450, "date": "17-12-2020" },
    { "name": "John Doe", "earning_amount": 450, "date": "17-12-2020" },
    { "name": "John Doe", "earning_amount": 560, "date": "28-12-2020" }
  ]


}

interface EmpModel {
  name: string,
  earning_amount: number,
  date: string,
  parsedDate?: Date
}

interface MonthlyWiseDataModel {
  amount: number,
  month: number,
  monthValue: string,
  year: number
}
