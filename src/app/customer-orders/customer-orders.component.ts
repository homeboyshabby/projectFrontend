import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  myOrder: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    let obs = this.service.getMyOrders(parseInt(localStorage.getItem("id")));

    obs.subscribe((res) => {
      this.myOrder = res;
    })
  }

}
