import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {
  cust: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.showCust().subscribe((res) => {
      this.cust = res;
    })
  }

}
