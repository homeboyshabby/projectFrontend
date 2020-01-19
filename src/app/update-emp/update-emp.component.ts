import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  emps:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.showEmp().subscribe((res)=>{
      this.emps = res;
      console.log(this.emps)
    })
  }

}
