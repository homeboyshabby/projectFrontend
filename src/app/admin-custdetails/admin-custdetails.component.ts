import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-custdetails',
  templateUrl: './admin-custdetails.component.html',
  styleUrls: ['./admin-custdetails.component.css']
})
export class AdminCustdetailsComponent implements OnInit {
  details:any;
  reseravtions:any;
  constructor(private service:DataService,
            private route:ActivatedRoute) { }

  ngOnInit() {
    this.service.getCustOrderDtlById(this.route.snapshot.paramMap.get("id")).subscribe((res)=>{
      this.details = res;
      console.log(this.details);
    })
    this.service.getCustReservationsDtlById(this.route.snapshot.paramMap.get("id")).subscribe((res)=>{
      this.reseravtions = res;
      console.log(this.reseravtions);
    })
  }

}
