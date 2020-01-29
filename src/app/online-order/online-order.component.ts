import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {
  orderStatus: any;
  clicked = false;
  emailObj:any;
  constructor(private service: DataService,private router:Router,private toster:ToastrService) { }

  ngOnInit() {
    let obs = this.service.getOnlineOrderStatus();

    obs.subscribe((res) => {
      this.orderStatus = res;
    })
    
  }
  changeStatus(id,email,name)
  {
    debugger
    this.emailObj = {
      "destEmail": email,
      "message": "Your Order with order id " + id + " is out for delivery!",
      "subject": "Order Out For Delivery!"
    }
    this.service.sendEmail(this.emailObj).subscribe((res) => {
    })
    this.toster.success("Email sent to " + name);
    this.service.changeOrderStatus(id).subscribe((res)=>{
    })
    alert("Order Status Changed Successfully!")
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/']);
    });
  }

}
