import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Project_demo_spring_hib_rest
export class DataService {
  //send email
  sendEmailUrl = "http://localhost:8080/Project/email/"
  //
  //admin 
  tablesUrl = "http://localhost:8080/Project/waiter/tables"
  menuUrl = "http://localhost:8080/Project/waiter/menu"
  orderStatusUrl = "http://localhost:8080/Project/admin/orderdetails"
  addMenuUrl = "http://localhost:8080/Project/admin/addmenu"
  showEmpUrl = "http://localhost:8080/Project/admin/showemp"
  getEmpByIdUrl = "http://localhost:8080/Project/admin/getemp/"
  showCustUrl = "http://localhost:8080/Project/admin/customers"
  getCustOrderDtlByIdUrl = "http://localhost:8080/Project/admin/getcustorders/"
  getCustReservationDtlByIdUrl = "http://localhost:8080/Project/admin/getcustreservations/"
  getCurrentTableCountUrl = "http://localhost:8080/Project/admin/tablecount"
  addTableUrl = "http://localhost:8080/Project/admin/addtable"
  getOrderDetailsUrl = "http://localhost:8080/Project/admin/getorderdetails/"
  addEmpUrl = "http://localhost:8080/Project/admin/addemp/"
  changeOrderStatusUrl = "http://localhost:8080/Project/admin/changeorderstatus/"
  //
  //auth
  authCustomerUrl = "http://localhost:8080/Project/auth/cust"
  authEmpUrl = "http://localhost:8080/Project/authemp"
  //
  //customer 
  addCustomerUrl = "http://localhost:8080/Project/admin"
  customerMyOrderUrl = "http://localhost:8080/Project/cust/myorders/"
  getMyProfileUrl = "http://localhost:8080/Project/cust/myprofile/"
  setMyProfileUrl = "http://localhost:8080/Project/cust/setmyprofile"
  changeMyPasswordUrl = "http://localhost:8080/Project/cust/changepassword"
  showMyReservationsUrl = "http://localhost:8080/Project/cust/myreservations"
  deleteMyReservationsUrl = "http://localhost:8080/Project/cust/deletemyreservation"
  orderOnlineUrl = "http://localhost:8080/Project/cust/orderonline"
  addMyReservationUrl = "http://localhost:8080/Project/cust/addmyreservation/"
  getOrderIdUrl = "http://localhost:8080/Project/cust/setorder/"
  addOrderDetailsUrl = "http://localhost:8080/Project/cust/addorderdetails/"
  generateBillUrl = "http://localhost:8080/Project/cust/genratebill"
  //
  // manager 
  getBillsUrl = "http://localhost:8080/Project/manager/bills"
  getOrderIdForSaleReportUrl = "http://localhost:8080/Project/manager/getorderidhd"
  getOrderAmtForSaleReportUrl = "http://localhost:8080/Project/manager/getorderid/"
  getOrderIdForDineInSaleReportUrl = "http://localhost:8080/Project/manager/getorderiddi"
  //
  // waiter 
  getOrderIdWaiterUrl = "http://localhost:8080/Project/waiter/setorder"
  addOrderDetailsWaiterUrl = "http://localhost:8080/Project/waiter/addorderdetails/"
  //
  // delivery boy 
  getPendingOrdersUrl = "http://localhost:8080/Project/dboy/pendingorders"
  getDeliveredOrdersUrl = "http://localhost:8080/Project/dboy/deliveredorders"
  getAllOrdersUrl = "http://localhost:8080/Project/dboy/allorders"
  changeOrderStatusDBoyUrl = "http://localhost:8080/Project/dboy/changeorderstatus/"
  //
  constructor(public http: HttpClient) { }
  // start delivery boy
  getPendingOrders() {
    return this.http.get(this.getPendingOrdersUrl);
  }
  getDeliveredOrders() {
    return this.http.get(this.getDeliveredOrdersUrl);
  }
  getAllOrders() {
    return this.http.get(this.getAllOrdersUrl);
  }
  changeOrderStatusDBoy(id) {
    return this.http.get(this.changeOrderStatusDBoyUrl + id);
  }
  // end delivery boy
  // email
  sendEmail(emailObj)
  {
    //console.log(emailObj)
    return this.http.post(this.sendEmailUrl, emailObj);
  }
  //
  // start waiter
  getOrderIdWaiter() {
    return this.http.get(this.getOrderIdWaiterUrl);
  }
  addOrderDetailsWaiter(detailsObj) {
    return this.http.post(this.addOrderDetailsWaiterUrl, detailsObj);
  }
  //
  // start admin
  addMenuItems(menuObj) {
    return this.http.post(this.addMenuUrl, menuObj);
  }
  showEmp() {
    return this.http.get(this.showEmpUrl);
  }
  getEmpById(id) {
    return this.http.get(this.getEmpByIdUrl + id);
  }
  showCust() {
    return this.http.get(this.showCustUrl);
  }
  getCustOrderDtlById(id) {
    return this.http.get(this.getCustOrderDtlByIdUrl + id);
  }
  getCustReservationsDtlById(id) {
    return this.http.get(this.getCustReservationDtlByIdUrl + id);
  }
  getCurrentTableCount() {
    return this.http.get(this.getCurrentTableCountUrl);
  }
  addTable(tableObj) {
    return this.http.post(this.addTableUrl, tableObj);
  }
  getOrderDetails(id) {
    return this.http.get(this.getOrderDetailsUrl + id);
  }
  addEmp(empObj, role) {
    return this.http.post(this.addEmpUrl + role, empObj);
  }
  changeOrderStatus(id) {
    return this.http.get(this.changeOrderStatusUrl + id);
  }
  //
  // Auth
  checkLoginCredentailsWithDB(custObj) {
    return this.http.post(this.authCustomerUrl, custObj);
  }
  checkLoginCredentailsWithDBForEmp(empObj) {
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
  getOrderId(id) {
    return this.http.get(this.getOrderIdUrl + id);
  }
  addOrderDetails(detailsObj, id) {
    return this.http.post(this.addOrderDetailsUrl + id, detailsObj);
  }
  generateBill(billObj) {
    return this.http.post(this.generateBillUrl, billObj);
  }
  getOrderDetailsForCust(id) {
    return this.http.get(this.getOrderDetailsUrl + id);
  }
  // end Customer
  // start waiter
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
  //
  // manager start
  getBills() {
    return this.http.get(this.getBillsUrl);
  }
  getOrderIdForHomeDeliverySaleReport() {
    return this.http.get(this.getOrderIdForSaleReportUrl);
  }
  getOrderIdForDineInSaleReport() {
    return this.http.get(this.getOrderIdForDineInSaleReportUrl);
  }
  getOrderAmtForSaleReport(id) {
    return this.http.get(this.getOrderAmtForSaleReportUrl + id);
  }
  //
}
