import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { BillsComponent } from './bills/bills.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { WaiterComponent } from './waiter/waiter.component';
import { OnlineOrderComponent } from './online-order/online-order.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddTablesComponent } from './add-tables/add-tables.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerOrderdetailsComponent } from './customer-orderdetails/customer-orderdetails.component';
import { CustomerReservationsComponent } from './customer-reservations/customer-reservations.component';
import { CustomerEditprofileComponent } from './customer-editprofile/customer-editprofile.component';
import { CustomerChangepasswordComponent } from './customer-changepassword/customer-changepassword.component';
import { ManagerDailyreportComponent } from './manager-dailyreport/manager-dailyreport.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { RegisterComponent } from './register/register.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminCustdetailsComponent } from './admin-custdetails/admin-custdetails.component';
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { ShowSelectedOrderComponent } from './show-selected-order/show-selected-order.component';
import { ManagerTablelistComponent } from './manager-tablelist/manager-tablelist.component';
import { ShoworderDetailsComponent } from './showorder-details/showorder-details.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { WaiterBillComponent } from './waiter-bill/waiter-bill.component';
import { AuthService } from './auth.service';
import { WaiterAuthService } from './waiter-auth.service';
import { AdminAuthService } from './admin-auth.service';
import { ManagerAuthService } from './manager-auth.service';
import { DelboyPendingordersComponent } from './delboy-pendingorders/delboy-pendingorders.component';
import { DelboyAllordersComponent } from './delboy-allorders/delboy-allorders.component';
import { DelboyComponent } from './delboy/delboy.component';
import { DelboyDeliveredordersComponent } from './delboy-deliveredorders/delboy-deliveredorders.component';
import { DelboyAuthService } from './delboy-auth.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent, children: [{ path: "", component: MainComponent }] },
  { path: "home", component: HomeComponent, children: [{ path: "login", component: LoginComponent }] },
  { path: "home", component: HomeComponent, children: [{ path: "onlineorder", component: OrderOnlineComponent }] },
  { path: "home", component: HomeComponent, children: [{ path: "menu", component: MenuListComponent }] },
  { path: "home", component: HomeComponent, children: [{ path: "employee", component: EmpLoginComponent }] },
  { path: "home", component: HomeComponent, children: [{ path: "register", component: RegisterComponent }] },
  { path: "home", component: HomeComponent, children: [{ path: "about", component: AboutusComponent }] },
  { path: "home", component: HomeComponent, children: [{ path: "contact", component: ContactComponent }] },
  //
  { path: "waiter", component: WaiterComponent, children: [{ path: "", component: MenuListComponent }], canActivate: [WaiterAuthService] },
  { path: "waiter", component: WaiterComponent, children: [{ path: "table", component: TableListComponent }], canActivate: [WaiterAuthService] },
  { path: "waiter", component: WaiterComponent, children: [{ path: "order", component: TakeOrderComponent }], canActivate: [WaiterAuthService] },
  { path: "waiter", component: WaiterComponent, children: [{ path: "bill", component: WaiterBillComponent }], canActivate: [WaiterAuthService] },
  { path: "waiter", component: WaiterComponent, children: [{ path: "showorder", component: ShowSelectedOrderComponent }], canActivate: [WaiterAuthService] },
  { path: "waiter", component: WaiterComponent, children: [{ path: "bills", component: BillsComponent }], canActivate: [WaiterAuthService] },
  { path: "waiter", component: WaiterComponent, children: [{ path: "menu/:id", component: TakeOrderComponent }], canActivate: [WaiterAuthService] },
  //
  { path: "admin", component: AdminComponent, children: [{ path: "", component: OnlineOrderComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "addmenu", component: AddMenuComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "addtables", component: AddTablesComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "showorderdetails/:id", component: ShoworderDetailsComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "updateemp", component: UpdateEmpComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "updateemp/:id", component: EditEmpComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "customers", component: AdminCustomersComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "getdetails/:id", component: AdminCustdetailsComponent }], canActivate: [AdminAuthService] },
  { path: "admin", component: AdminComponent, children: [{ path: "addemp", component: AddEmpComponent }], canActivate: [AdminAuthService] },
  //
  { path: "manager", component: ManagerComponent, children: [{ path: "", component: MenuListComponent }], canActivate: [ManagerAuthService] },
  { path: "manager", component: ManagerComponent, children: [{ path: "table", component: ManagerTablelistComponent }], canActivate: [ManagerAuthService] },
  { path: "manager", component: ManagerComponent, children: [{ path: "order", component: TakeOrderComponent }], canActivate: [ManagerAuthService] },
  { path: "manager", component: ManagerComponent, children: [{ path: "bills", component: BillsComponent }], canActivate: [ManagerAuthService] },
  { path: "manager", component: ManagerComponent, children: [{ path: "dailysalereport", component: ManagerDailyreportComponent }], canActivate: [ManagerAuthService] },
  //
  { path: "customer", component: CustomerComponent, children: [{ path: "", component: MenuListComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "orders", component: CustomerOrdersComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "orderdetails/:id", component: CustomerOrderdetailsComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "myreservations", component: CustomerReservationsComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "editmyprofile", component: CustomerEditprofileComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "changepassword", component: CustomerChangepasswordComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "reservations", component: ReservationsComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "onlineorder", component: OrderOnlineComponent }], canActivate: [AuthService] },
  { path: "customer", component: CustomerComponent, children: [{ path: "bills", component: ShowBillsComponent }], canActivate: [AuthService] },
  // 
  { path: "dboy", component: DelboyComponent, children: [{ path: "", component: DelboyPendingordersComponent }], canActivate: [DelboyAuthService] },
  { path: "dboy", component: DelboyComponent, children: [{ path: "orders", component: DelboyDeliveredordersComponent }], canActivate: [DelboyAuthService] },
  { path: "dboy", component: DelboyComponent, children: [{ path: "allorders", component: DelboyAllordersComponent }], canActivate: [DelboyAuthService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
