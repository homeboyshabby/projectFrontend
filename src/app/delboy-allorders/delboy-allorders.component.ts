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
    console.log("all")
    this.service.getAllOrders().subscribe((res)=>{
      console.log(res)
      this.orders = res
    })
  }

}
