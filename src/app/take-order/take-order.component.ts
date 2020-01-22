import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
//declare var $: any;
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {
  count = 0;
  arr = [];
  selectedMenu: any;
  showselecteditemdetails: any;
  menu: any;
  orderId: any;
  orderDetails = [];
  reservationObj: any;
  total: any;
  id: any;
  constructor(private service: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let obs = this.service.getMenu();
    this.id = this.route.snapshot.paramMap.get("id")
    obs.subscribe((res) => {
      this.menu = res;
    })
    this.count = parseInt(sessionStorage.getItem("wcount"));
    for (let i = 0; i < this.count; i++) {
      this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
    }
    this.showselecteditemdetails = JSON.parse(sessionStorage.getItem(this.count.toString()))
  }
  takeOnlineOrder(formData) {
    this.count = parseInt(sessionStorage.getItem("wcount"));
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
    sessionStorage.setItem("wcount", this.count.toString());

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/waiter/menu/' + this.id]);
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
    this.service.getOrderIdWaiter().subscribe((res) => {
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
        this.service.addOrderDetailsWaiter(this.orderDetails[i]).subscribe((res) => {
        })
        this.router.navigate(['/waiter/bill']);
      }
    })
  }
}






// count = 0;
//   arr = [];
//   tables: any;
//   menus: any;
//   id: any;
//   selectedMenu: any;
//   showselecteditemdetails: any;
//   total:any;
//   qty = 1;
//   refreshCount = parseInt(sessionStorage.getItem("rcount"));
//   constructor(private service: DataService, private route: ActivatedRoute,private router:Router) { }

//   ngOnInit() {
//     sessionStorage.setItem("rcount",this.refreshCount.toString())
//     let table = this.service.getTables();
//     this.id = this.route.snapshot.paramMap.get("id")
//     table.subscribe((res) => {
//       this.tables = res;
//     })
//     let menu = this.service.getMenu();

//     menu.subscribe((res) => {
//       this.menus = res;
//     })
//     this.count = parseInt(sessionStorage.getItem("wcount"));

//   }
//   placeOrder()
//   {
//     console.log("hi");
//     this.router.navigate(['/waiter/showorder']);
//   }
//   checkItem(event) {
//     //debugger
//     this.count = parseInt(sessionStorage.getItem("wcount"));
//     //alert(this.count)
//     if (event.target.checked) {
//       let menuname = event.target.id
//       let menuList = { "itemDesc": menuname }
//       this.service.orderOnline(menuList).subscribe((res) => {
//         this.selectedMenu = res;
//         //console.log(this.selectedMenu)
//       })
//       this.total = this.qty * this.selectedMenu.itemPrice
//       this.showselecteditemdetails = {
//         "itemName": this.selectedMenu.itemDesc,
//         "itemPrice": this.selectedMenu.itemPrice,
//         "itemId": this.selectedMenu.itemId,
//         "itemQty": this.qty,
//         "itemTotal": this.total
//       }
//       //console.log(this.showselecteditemdetails)
//       //debugger
//       sessionStorage.setItem(this.count.toString(), JSON.stringify(this.showselecteditemdetails));
//       this.count++;
//       sessionStorage.setItem("wcount", this.count.toString());
//       for (let i = 0; i < this.count; i++) {
//         this.arr[i] = JSON.parse(sessionStorage.getItem(i.toString()));
//       }
//     }
//   }
//   increment(qty,item)
//   {
//     console.log(item.itemQty)
//     item.itemQty = ++qty; 
//     //console.log(item.itemQty)
//   }
//   decrement(qty)
//   {
//     console.log(qty)
//   }