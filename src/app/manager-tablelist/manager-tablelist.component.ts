import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manager-tablelist',
  templateUrl: './manager-tablelist.component.html',
  styleUrls: ['./manager-tablelist.component.css']
})
export class ManagerTablelistComponent implements OnInit {
  tables: any;
  count = 0;
  refreshCount = 0;
  constructor(private service: DataService) { }

  ngOnInit() {
    let obs = this.service.getTables();
    obs.subscribe((res) => {
      this.tables = res;
    })
  }
}
