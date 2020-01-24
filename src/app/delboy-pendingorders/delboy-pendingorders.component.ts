import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delboy-pendingorders',
  templateUrl: './delboy-pendingorders.component.html',
  styleUrls: ['./delboy-pendingorders.component.css']
})
export class DelboyPendingordersComponent implements OnInit {
orders:any
  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
    this.service.getPendingOrders().subscribe((res)=>{
      console.log(res)
      this.orders = res
    })
  }

  changeStatus(id)
  {
    this.service.changeOrderStatusDBoy(id).subscribe((res)=>{
      console.log(res);
    })
    alert("Order Status Changed Successfully!")
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/']);
    });
  }
}
