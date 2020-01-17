import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})
export class OrderOnlineComponent implements OnInit {
  menu:any;
  constructor(private service: DataService) { }

  ngOnInit() {
    let obs = this.service.getMenu();

    obs.subscribe((res)=>{
      this.menu = res;
    })
  }

}
