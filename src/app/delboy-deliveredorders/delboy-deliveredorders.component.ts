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
    this.service.getDeliveredOrders().subscribe((res)=>{
      this.orders = res
    })
  }

}
