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

const routes: Routes = [
  //{path:"",component:LoginComponent},
  {path:"",component:HomeComponent,children:[{path:"",component:MainComponent}]},
  {path:"home",component:HomeComponent,children:[{path:"login",component:LoginComponent}]},
  {path:"home",component:HomeComponent,children:[{path:"onlineorder",component:OrderOnlineComponent}]},
  {path:"home",component:HomeComponent,children:[{path:"menu",component:MenuListComponent}]},
  {path:"home",component:HomeComponent,children:[{path:"employee",component:EmpLoginComponent}]},
  {path:"home",component:HomeComponent,children:[{path:"register",component:RegisterComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"menu",component:MenuListComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"table",component:TableListComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"order",component:TakeOrderComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"bills",component:BillsComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"menu/:id",component:TakeOrderComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"onlineorder",component:OnlineOrderComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"addmenu",component:AddMenuComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"addtables",component:AddTablesComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"updateemp",component:UpdateEmpComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"updateemp/:id",component:EditEmpComponent}]},
  {path:"manager",component:ManagerComponent},
  {path:"manager",component:ManagerComponent,children:[{path:"menu",component:MenuListComponent}]},
  {path:"manager",component:ManagerComponent,children:[{path:"table",component:TableListComponent}]},
  {path:"manager",component:ManagerComponent,children:[{path:"order",component:TakeOrderComponent}]},
  {path:"manager",component:ManagerComponent,children:[{path:"bills",component:BillsComponent}]},
  {path:"manager",component:ManagerComponent,children:[{path:"dailysalereport",component:ManagerDailyreportComponent}]},
  {path:"customer",component:CustomerComponent,children:[{path:"",component:CustomerOrdersComponent}]},
  {path:"customer",component:CustomerComponent,children:[{path:"orderdetails/:id",component:CustomerOrderdetailsComponent}]},
  {path:"customer",component:CustomerComponent,children:[{path:"myreservations",component:CustomerReservationsComponent}]},
  {path:"customer",component:CustomerComponent,children:[{path:"editmyprofile",component:CustomerEditprofileComponent}]},
  {path:"customer",component:CustomerComponent,children:[{path:"changepassword",component:CustomerChangepasswordComponent}]},
  {path:"customer",component:CustomerComponent,children:[{path:"reservations",component:ReservationsComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
