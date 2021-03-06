import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-bills',
  templateUrl: './show-bills.component.html',
  styleUrls: ['./show-bills.component.css']
})
export class ShowBillsComponent implements OnInit {
  count = 0;
  arr = [];
  totalBill = 0;
  bill: any;
  c = 0;
  emailObj:any;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.count = parseInt(sessionStorage.getItem("count"));
    for (let i = 0; i < this.count; i++) {
      this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
      this.totalBill = this.totalBill + this.arr[i].itemTotal;
    }
    this.bill = {
      "billAmt": this.totalBill,
      "order": JSON.parse(sessionStorage.getItem("orderId")).orderId
    }
    alert("Bill Paid Successfully!")
    this.service.generateBill(this.bill).subscribe((res) => {
    })

    this.emailObj = {
      "destEmail": localStorage.getItem("email"),
      "message": "Thank you for ordering! your bill amount is " + this.totalBill + " with order ID " + JSON.parse(sessionStorage.getItem("orderId")).orderId + " it will be delivered soon!",
      "subject": "Order Details"
    }
    this.service.sendEmail(this.emailObj).subscribe((res) => {
    })

    sessionStorage.setItem("count", this.c.toString())

  }
  onPay() {
    this.router.navigate(['/customer/orders']);
    //   this.bill = {
    //     "billAmt": this.totalBill,
    //     "order": JSON.parse(sessionStorage.getItem("orderId")).orderId
    //   }
    //   this.service.generateBill(this.bill).subscribe((res) => {
    //   })
    //   alert("Bill Paid Successfully!")
    //   sessionStorage.setItem("count", this.c.toString())
    //   this.router.navigate(['/customer/orders']);
    // }

  }
}
