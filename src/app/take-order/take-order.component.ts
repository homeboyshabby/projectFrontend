import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {
  tables: any;
  menus: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    let table = this.service.getTables();

    table.subscribe((res) => {
      this.tables = res;
    })
    let menu = this.service.getMenu();
    
    menu.subscribe((res) => {
      //console.log(res);
      this.menus = res;
    })
  }
}

