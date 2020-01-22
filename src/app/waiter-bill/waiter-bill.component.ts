import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiter-bill',
  templateUrl: './waiter-bill.component.html',
  styleUrls: ['./waiter-bill.component.css']
})
export class WaiterBillComponent implements OnInit {
  count = 0;
  arr = [];
  totalBill = 0;
  bill: any;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.count = parseInt(sessionStorage.getItem("wcount"));
    for (let i = 0; i < this.count; i++) {
      this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
      this.totalBill = this.totalBill + this.arr[i].itemTotal;
    }
  }
  onPay() {
    this.bill = {
      "billAmt": this.totalBill,
      "order": JSON.parse(sessionStorage.getItem("orderId")).orderId
    }
    this.service.generateBill(this.bill).subscribe((res) => {
    })
    alert("bill paid successfully!")
    this.router.navigate(['/waiter/table']);
  }
}
