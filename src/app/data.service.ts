import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tablesUrl="http://localhost:8080/Project_demo_spring_hib_rest/waiter/tables"
  menuUrl="http://localhost:8080/Project_demo_spring_hib_rest/waiter/menu"
  orderStatusUrl="http://localhost:8080/Project_demo_spring_hib_rest/admin/orderdetails"
  constructor(public http:HttpClient) { }

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
