import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-bills',
  templateUrl: './show-bills.component.html',
  styleUrls: ['./show-bills.component.css']
})
export class ShowBillsComponent implements OnInit {
  count = 0;
  arr = [];
  totalBill = 0;
  bill:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    this.count=parseInt(sessionStorage.getItem("count"));
    for (let i = 0; i < this.count; i++) {
      this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
      console.log(this.arr[i]);
      this.totalBill = this.totalBill + this.arr[i].itemTotal;
    }
    //console.log(this.totalBill)
  }
  onPay()
  {
    this.bill = {
      "billAmt":this.totalBill,
      "order": JSON.parse(sessionStorage.getItem("orderId")).orderId
    }
    console.log(this.bill)
    this.service.generateBill(this.bill).subscribe((res)=>{
      console.log(res)
    })
  }
}
