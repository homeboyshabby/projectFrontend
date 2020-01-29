import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delboy-allorders',
  templateUrl: './delboy-allorders.component.html',
  styleUrls: ['./delboy-allorders.component.css']
})
export class DelboyAllordersComponent implements OnInit {
  orders:any
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getAllOrders().subscribe((res)=>{
      this.orders = res
    })
  }

}
