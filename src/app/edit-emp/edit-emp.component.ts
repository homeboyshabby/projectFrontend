import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  emp:any;
  constructor(private service:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("id"))
    this.service.getEmpById(this.route.snapshot.paramMap.get("id")).subscribe((res)=>{
      this.emp = res;
      console.log(this.emp);
    })
  }

}
