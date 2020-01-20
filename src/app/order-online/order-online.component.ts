import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})
export class OrderOnlineComponent implements OnInit {
  count = 0;
  arr = [];
  selectedMenu: any;
  showselecteditemdetails: any;
  menu: any;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    let obs = this.service.getMenu();

    obs.subscribe((res) => {
      this.menu = res;
    })
    this.count=parseInt(sessionStorage.getItem("count"));
    //alert(this.count)
    //console.log(this.count)
    for (let i = 0; i < this.count; i++) {
      this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
      console.log(this.arr[i]);
      //alert(this.arr[i]);
    }
    console.log(this.arr)
    this.showselecteditemdetails = JSON.parse(sessionStorage.getItem(this.count.toString()))
  }
  takeOnlineOrder(formData) {
    //debugger
    this.count = parseInt(sessionStorage.getItem("count"));
    let reservationObj = formData.form.value
    let total = this.selectedMenu.itemPrice * reservationObj.itemQty
    this.showselecteditemdetails = {
      "itemName": this.selectedMenu.itemDesc,
      "itemQty": reservationObj.itemQty,
      "itemPrice": this.selectedMenu.itemPrice,
      "itemTotal": total
    }
    
    sessionStorage.setItem(this.count.toString(), JSON.stringify(this.showselecteditemdetails));
    this.count++;
    sessionStorage.setItem("count", this.count.toString());
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/customer/onlineorder']);
    });
  }

  checkItem(event) {
    let menuname = event.target.value
    let menuList = { "itemDesc": menuname }
    this.service.orderOnline(menuList).subscribe((res) => {
      this.selectedMenu = res;
    })
  }
}
