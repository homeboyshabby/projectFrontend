import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delboy-deliveredorders',
  templateUrl: './delboy-deliveredorders.component.html',
  styleUrls: ['./delboy-deliveredorders.component.css']
})
export class DelboyDeliveredordersComponent implements OnInit {
  orders:any
  constructor(private service:DataService) { }

  ngOnInit() {
    console.log("del")
    this.service.getDeliveredOrders().subscribe((res)=>{
      console.log(res)
      this.orders = res
    })
  }

}
