import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {
  tables: any;
  menus: any;
  id:any;
  constructor(private service: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    let table = this.service.getTables();
    this.id = this.route.snapshot.paramMap.get("id")
    //console.log(this.id)
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

