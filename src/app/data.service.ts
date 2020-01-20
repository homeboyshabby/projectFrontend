import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //admin 
  tablesUrl = "http://localhost:8080/Project_demo_spring_hib_rest/waiter/tables"
  menuUrl = "http://localhost:8080/Project_demo_spring_hib_rest/waiter/menu"
  orderStatusUrl = "http://localhost:8080/Project_demo_spring_hib_rest/admin/orderdetails"
  addMenuUrl = "http://localhost:8080/Project_demo_spring_hib_rest/admin/addmenu"
  showEmpUrl = "http://localhost:8080/Project_demo_spring_hib_rest/admin/showemp"
  getEmpByIdUrl = "http://localhost:8080/Project_demo_spring_hib_rest/admin/getemp/"
  showCustUrl = "http://localhost:8080/Project_demo_spring_hib_rest/admin/customers"
  getCustOrderDtlByIdUrl = "http://localhost:8080/Project_demo_spring_hib_rest/admin/getcustorders/"
  getCustReservationDtlByIdUrl = "http://localhost:8080/Project_demo_spring_hib_rest/admin/getcustreservations/"
  //
  //auth
  authCustomerUrl = "http://localhost:8080/Project_demo_spring_hib_rest/auth/cust"
  authEmpUrl = "http://localhost:8080/Project_demo_spring_hib_rest/authemp"
  //
  //customer 
  addCustomerUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust"
  customerMyOrderUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/myorders/"
  getMyProfileUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/myprofile/"
  setMyProfileUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/setmyprofile"
  changeMyPasswordUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/changepassword"
  showMyReservationsUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/myreservations"
  deleteMyReservationsUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/deletemyreservation"
  orderOnlineUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/orderonline"
  addMyReservationUrl = "http://localhost:8080/Project_demo_spring_hib_rest/cust/addmyreservation/"
  //
  constructor(public http: HttpClient) { }
  // start admin
  addMenuItems(menuObj)
  {
    //debugger
    console.log(menuObj)
    return this.http.post(this.addMenuUrl,menuObj);
  }
  showEmp()
  {
    return this.http.get(this.showEmpUrl);
  }
  getEmpById(id)
  {
    return this.http.get(this.getEmpByIdUrl + id);
  }
  showCust()
  {
    return this.http.get(this.showCustUrl);
  }
  getCustOrderDtlById(id)
  {
    return this.http.get(this.getCustOrderDtlByIdUrl + id);
  }
  getCustReservationsDtlById(id)
  {
    return this.http.get(this.getCustReservationDtlByIdUrl + id);
  }
  //
  // Auth
  checkLoginCredentailsWithDB(custObj) {
    return this.http.post(this.authCustomerUrl, custObj);
  }
  checkLoginCredentailsWithDBForEmp(empObj)
  {
    return this.http.post(this.authEmpUrl, empObj);
  }
  //
  //start customer
  addCust(custObj) {
    return this.http.post(this.addCustomerUrl, custObj);
  }
  getMyOrders(id) {
    return this.http.get(this.customerMyOrderUrl + id);
  }
  getMyProfile(id) {
    return this.http.get(this.getMyProfileUrl + id);
  }
  setMyProfile(custObj) {
    return this.http.post(this.setMyProfileUrl, custObj);
  }
  changeMyPassword(custObj) {
    return this.http.post(this.changeMyPasswordUrl, custObj);
  }
  getMyReservations(custId) {
    return this.http.post(this.showMyReservationsUrl, custId);
  }
  deleteMyReservations(resId) {
    return this.http.post(this.deleteMyReservationsUrl, resId);
  }
  orderOnline(itemname) {
    return this.http.post(this.orderOnlineUrl, itemname);
  }
  addMyReservation(resObj, id) {
    return this.http.post(this.addMyReservationUrl + id, resObj);
  }
  // end Customer
  getTables() {
    return this.http.get(this.tablesUrl);
  }

  getMenu() {
    return this.http.get(this.menuUrl);
  }

  goToTable(id) {

  }

  getOnlineOrderStatus() {
    return this.http.get(this.orderStatusUrl);
  }

}
