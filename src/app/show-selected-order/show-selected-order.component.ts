import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-show-selected-order',
  templateUrl: './show-selected-order.component.html',
  styleUrls: ['./show-selected-order.component.css']
})
export class ShowSelectedOrderComponent implements OnInit {
  count = 0;
  arr = [];
  id: any;
  totalAmt = 0;
  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = parseInt(sessionStorage.getItem("rcount"))
    if (this.id == 0) {
      this.getMenu()
      this.id++;
      sessionStorage.setItem("rcount", this.id.toString())
    }
  }
  increment(qty, item) {
    qty++;
    item.itemQty = qty;
    item.itemTotal = item.itemQty * item.itemPrice
    this.totalAmt
  }
  decrement(qty, item) {
    qty--;
    item.itemQty = qty;
    item.itemTotal = item.itemQty * item.itemPrice
  }

  getMenu() {
    this.count = parseInt(sessionStorage.getItem("wcount"));
    for (let i = 0; i < this.count; i++) {
      this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
    }
  }

  placeOrder(item) {
  }
}

