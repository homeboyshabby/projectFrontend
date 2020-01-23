import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {
  orderStatus: any;
  clicked = false;
  constructor(private service: DataService,private router:Router) { }

  ngOnInit() {
    let obs = this.service.getOnlineOrderStatus();

    obs.subscribe((res) => {
      this.orderStatus = res;
    })
  }
  changeStatus(id)
  {
    this.service.changeOrderStatus(id).subscribe((res)=>{
      console.log(res);
    })
    alert("Order Status Changed Successfully!")
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/']);
    });
  }

}
