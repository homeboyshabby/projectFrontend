import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getBills().subscribe((res) => {
      this.bills = res;
    })
  }

}
