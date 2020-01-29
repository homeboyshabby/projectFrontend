import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delboy-pendingorders',
  templateUrl: './delboy-pendingorders.component.html',
  styleUrls: ['./delboy-pendingorders.component.css']
})
export class DelboyPendingordersComponent implements OnInit {
orders:any
emailObj:any
  constructor(private service:DataService,private router:Router,private toster:ToastrService) { }

  ngOnInit() {
    this.service.getPendingOrders().subscribe((res)=>{
      this.orders = res
      console.log(this.orders)
    })
  }

  changeStatus(id,email,name)
  {
    debugger
    this.emailObj = {
      "destEmail": email,
      "message": "Your Order with order id " + id + " is delivered!",
      "subject": "Order delivered!"
    }
    this.service.sendEmail(this.emailObj).subscribe((res) => {
    })
    this.toster.success("Email sent to " + name);
    this.service.changeOrderStatusDBoy(id).subscribe((res)=>{
    })
    alert("Order Status Changed Successfully!")
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dboy/orders']);
    });
  }
}
