import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menu: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    console.log("in menu list")
    let obs = this.service.getMenu();

    obs.subscribe((res) => {
      this.menu = res;
    })
  }
}
