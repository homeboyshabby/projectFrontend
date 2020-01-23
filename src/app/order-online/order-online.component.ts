import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

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
  orderId: any;
  orderDetails = [];
  reservationObj: any;
  total: any;
  itemTotal = 0;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    let obs = this.service.getMenu();
    obs.subscribe((res) => {
      this.menu = res;
    })
    this.count = parseInt(sessionStorage.getItem("count"));
    for (let i = 0; i < this.count; i++) {
      this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
      this.itemTotal = this.itemTotal + this.arr[i].itemTotal
    }
    this.showselecteditemdetails = JSON.parse(sessionStorage.getItem(this.count.toString()))
  }
  takeOnlineOrder(formData) {
    this.count = parseInt(sessionStorage.getItem("count"));
    this.reservationObj = formData.form.value
    this.total = this.selectedMenu.itemPrice * this.reservationObj.itemQty
    this.showselecteditemdetails = {
      "itemName": this.selectedMenu.itemDesc,
      "itemQty": this.reservationObj.itemQty,
      "itemPrice": this.selectedMenu.itemPrice,
      "itemTotal": this.total,
      "itemId": this.selectedMenu.itemId
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

  onPlaceOrder() {
    this.service.getOrderId(parseInt(localStorage.getItem("id"))).subscribe((res) => {
      this.orderId = res;
      sessionStorage.setItem("orderId", JSON.stringify(this.orderId))
      for (let i = 0; i < this.count; i++) {
        let t = this.arr[i].itemQty * this.arr[i].itemPrice;
        this.orderDetails[i] = {
          "orderItemQty": this.arr[i].itemQty,
          "orderItemAmt": t,
          "custId": parseInt(localStorage.getItem("id")),
          "orderId": JSON.parse(sessionStorage.getItem("orderId")).orderId,
          "itemId": this.arr[i].itemId
        }
        this.service.addOrderDetails(this.orderDetails[i], parseInt(localStorage.getItem("id"))).subscribe((res) => {
        })
      }
    })
    this.router.navigate(['/customer/bills']);
  }
}





























// export class OrderOnlineComponent implements OnInit {
//   count = 0;
//   arr = [];
//   selectedMenu: any;
//   showselecteditemdetails: any;
//   menu: any;
//   orderId: any;
//   orderDetails = [];
//   reservationObj: any;
//   total: any;
//   itemTotal = 0;
//   constructor(private service: DataService, private router: Router) { }

//   ngOnInit() {
//     let obs = this.service.getMenu();
//     obs.subscribe((res) => {
//       this.menu = res;
//     })
//     this.count = parseInt(sessionStorage.getItem("count"));
//     for (let i = 0; i < this.count; i++) {
//       this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
//       this.itemTotal = this.itemTotal + this.arr[i].itemTotal
//     }
//     this.showselecteditemdetails = JSON.parse(sessionStorage.getItem(this.count.toString()))
//   }
//   takeOnlineOrder(formData) {
//     this.count = parseInt(sessionStorage.getItem("count"));
//     this.reservationObj = formData.form.value
//     this.total = this.selectedMenu.itemPrice * this.reservationObj.itemQty
//     this.showselecteditemdetails = {
//       "itemName": this.selectedMenu.itemDesc,
//       "itemQty": this.reservationObj.itemQty,
//       "itemPrice": this.selectedMenu.itemPrice,
//       "itemTotal": this.total,
//       "itemId": this.selectedMenu.itemId
//     }

//     sessionStorage.setItem(this.count.toString(), JSON.stringify(this.showselecteditemdetails));
//     this.count++;
//     sessionStorage.setItem("count", this.count.toString());

//     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
//       this.router.navigate(['/customer/onlineorder']);
//     });
//   }

//   checkItem(event) {
//     let menuname = event.target.value
//     let menuList = { "itemDesc": menuname }
//     this.service.orderOnline(menuList).subscribe((res) => {
//       this.selectedMenu = res;
//     })
//   }

//   onPlaceOrder() {
//     this.service.getOrderId(parseInt(localStorage.getItem("id"))).subscribe((res) => {
//       this.orderId = res;
//       sessionStorage.setItem("orderId", JSON.stringify(this.orderId))
//       for (let i = 0; i < this.count; i++) {
//         let t = this.arr[i].itemQty * this.arr[i].itemPrice;
//         this.orderDetails[i] = {
//           "orderItemQty": this.arr[i].itemQty,
//           "orderItemAmt": t,
//           "custId": parseInt(localStorage.getItem("id")),
//           "orderId": JSON.parse(sessionStorage.getItem("orderId")).orderId,
//           "itemId": this.arr[i].itemId
//         }
//         this.service.addOrderDetails(this.orderDetails[i], parseInt(localStorage.getItem("id"))).subscribe((res) => {
//         })
//       }
//     })
//     this.router.navigate(['/customer/bills']);
//   }
// }
