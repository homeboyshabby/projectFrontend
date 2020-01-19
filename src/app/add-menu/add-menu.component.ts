import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menu:any;
  constructor(private service: DataService) { }

  ngOnInit() {
    let obs = this.service.getMenu();

    obs.subscribe((res)=>{
      this.menu = res;
    })
  }

}