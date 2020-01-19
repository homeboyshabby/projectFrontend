import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tablesUrl="http://localhost:8080/Project_demo_spring_hib_rest/waiter/tables"
  menuUrl="http://localhost:8080/Project_demo_spring_hib_rest/waiter/menu"
  orderStatusUrl="http://localhost:8080/Project_demo_spring_hib_rest/admin/orderdetails"
  authCustomerUrl="http://localhost:8080/Project_demo_spring_hib_rest/auth/cust"
  customerMyOrderUrl="http://localhost:8080/Project_demo_spring_hib_rest/cust/myorders/"
  constructor(public http:HttpClient) { }
  //Customer
  checkLoginCredentailsWithDB(custObj)
  {
    return this.http.post(this.authCustomerUrl,custObj);
  }
  getMyOrders(id)
  {
    return this.http.get(this.customerMyOrderUrl + id);
  }

  //
  getTables()
  {
    return this.http.get(this.tablesUrl);
  }

  getMenu()
  {
    return this.http.get(this.menuUrl);
  }

  goToTable(id)
  {
    
  }

  getOnlineOrderStatus()
  {
    return this.http.get(this.orderStatusUrl);
  }

}
