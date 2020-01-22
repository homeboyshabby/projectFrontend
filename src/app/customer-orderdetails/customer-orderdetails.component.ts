import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-orderdetails',
  templateUrl: './customer-orderdetails.component.html',
  styleUrls: ['./customer-orderdetails.component.css']
})
export class CustomerOrderdetailsComponent implements OnInit {
  result: any;
  orderTotal = 0;
  arr = [];
  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getOrderDetailsForCust(this.route.snapshot.paramMap.get("id")).subscribe((res) => {
      this.result = res;
      this.arr = this.result
      for (let i = 0; i < this.arr.length; i++) {
        this.orderTotal = this.orderTotal + this.arr[i].orderItemAmt
      }
    })
  }

}
