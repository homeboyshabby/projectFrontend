import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showorder-details',
  templateUrl: './showorder-details.component.html',
  styleUrls: ['./showorder-details.component.css']
})
export class ShoworderDetailsComponent implements OnInit {
  result: any;
  orderTotal = 0;
  name = "";
  city = "";
  orderType = "";
  arr = [];
  constructor(private service: DataService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.service.getOrderDetails(this.route.snapshot.paramMap.get("id")).subscribe((res) => {
      this.result = res;
      this.arr = this.result
      for (let i = 0; i < this.arr.length; i++) {
        this.orderTotal = this.orderTotal + this.arr[i].orderItemAmt
        this.name = this.arr[i].orderId.custId.name
        this.city = this.arr[i].orderId.custId.address.city
        this.orderType = this.arr[i].orderId.orderType
      }
    })
  }

}
