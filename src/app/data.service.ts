import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Project_demo_spring_hib_rest
export class DataService {
  //send email
  sendEmailUrl = "http://15.206.149.199:8080/Project/email/"
  //
  //admin 
  tablesUrl = "http://15.206.149.199:8080/Project/waiter/tables"
  menuUrl = "http://15.206.149.199:8080/Project/waiter/menu"
  orderStatusUrl = "http://15.206.149.199:8080/Project/admin/orderdetails"
  addMenuUrl = "http://15.206.149.199:8080/Project/admin/addmenu"
  showEmpUrl = "http://15.206.149.199:8080/Project/admin/showemp"
  getEmpByIdUrl = "http://15.206.149.199:8080/Project/admin/getemp/"
  showCustUrl = "http://15.206.149.199:8080/Project/admin/customers"
  getCustOrderDtlByIdUrl = "http://15.206.149.199:8080/Project/admin/getcustorders/"
  getCustReservationDtlByIdUrl = "http://15.206.149.199:8080/Project/admin/getcustreservations/"
  getCurrentTableCountUrl = "http://15.206.149.199:8080/Project/admin/tablecount"
  addTableUrl = "http://15.206.149.199:8080/Project/admin/addtable"
  getOrderDetailsUrl = "http://15.206.149.199:8080/Project/admin/getorderdetails/"
  addEmpUrl = "http://15.206.149.199:8080/Project/admin/addemp/"
  changeOrderStatusUrl = "http://15.206.149.199:8080/Project/admin/changeorderstatus/"
  //
  //auth
  authCustomerUrl = "http://15.206.149.199:8080/Project/auth/cust"
  authEmpUrl = "http://15.206.149.199:8080/Project/authemp"
  //
  //customer 
  addCustomerUrl = "http://15.206.149.199:8080/Project/admin"
  customerMyOrderUrl = "http://15.206.149.199:8080/Project/cust/myorders/"
  getMyProfileUrl = "http://15.206.149.199:8080/Project/cust/myprofile/"
  setMyProfileUrl = "http://15.206.149.199:8080/Project/cust/setmyprofile"
  changeMyPasswordUrl = "http://15.206.149.199:8080/Project/cust/changepassword"
  showMyReservationsUrl = "http://15.206.149.199:8080/Project/cust/myreservations"
  deleteMyReservationsUrl = "http://15.206.149.199:8080/Project/cust/deletemyreservation"
  orderOnlineUrl = "http://15.206.149.199:8080/Project/cust/orderonline"
  addMyReservationUrl = "http://15.206.149.199:8080/Project/cust/addmyreservation/"
  getOrderIdUrl = "http://15.206.149.199:8080/Project/cust/setorder/"
  addOrderDetailsUrl = "http://15.206.149.199:8080/Project/cust/addorderdetails/"
  generateBillUrl = "http://15.206.149.199:8080/Project/cust/genratebill"
  //
  // manager 
  getBillsUrl = "http://15.206.149.199:8080/Project/manager/bills"
  getOrderIdForSaleReportUrl = "http://15.206.149.199:8080/Project/manager/getorderidhd"
  getOrderAmtForSaleReportUrl = "http://15.206.149.199:8080/Project/manager/getorderid/"
  getOrderIdForDineInSaleReportUrl = "http://15.206.149.199:8080/Project/manager/getorderiddi"
  //
  // waiter 
  getOrderIdWaiterUrl = "http://15.206.149.199:8080/Project/waiter/setorder"
  addOrderDetailsWaiterUrl = "http://15.206.149.199:8080/Project/waiter/addorderdetails/"
  //
  // delivery boy 
  getPendingOrdersUrl = "http://15.206.149.199:8080/Project/dboy/pendingorders"
  getDeliveredOrdersUrl = "http://15.206.149.199:8080/Project/dboy/deliveredorders"
  getAllOrdersUrl = "http://15.206.149.199:8080/Project/dboy/allorders"
  changeOrderStatusDBoyUrl = "http://15.206.149.199:8080/Project/dboy/changeorderstatus/"
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
  sendEmail(emailObj) {
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
