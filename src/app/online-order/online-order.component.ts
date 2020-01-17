import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {
  orderStatus:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    let obs = this.service.getOnlineOrderStatus();

    obs.subscribe((res)=>{
      this.orderStatus = res;
    })
  }

}
