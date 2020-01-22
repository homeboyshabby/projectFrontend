import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterComponent } from './waiter/waiter.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TakeOrderComponent } from './take-order/take-order.component';
import { OrderComponent } from './order/order.component';
import { BillsComponent } from './bills/bills.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
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
import { RegisterComponent } from './register/register.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminCustdetailsComponent } from './admin-custdetails/admin-custdetails.component';
import { ShowBillsComponent } from './show-bills/show-bills.component';
import { ShowSelectedOrderComponent } from './show-selected-order/show-selected-order.component';
import { ManagerTablelistComponent } from './manager-tablelist/manager-tablelist.component';
import { ShoworderDetailsComponent } from './showorder-details/showorder-details.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { WaiterBillComponent } from './waiter-bill/waiter-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    MenuListComponent,
    TableListComponent,
    TakeOrderComponent,
    OrderComponent,
    BillsComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    OnlineOrderComponent,
    AddMenuComponent,
    AddTablesComponent,
    UpdateEmpComponent,
    HomeComponent,
    MainComponent,
    OrderOnlineComponent,
    ReservationsComponent,
    CustomerComponent,
    CustomerOrdersComponent,
    CustomerOrderdetailsComponent,
    CustomerReservationsComponent,
    CustomerEditprofileComponent,
    CustomerChangepasswordComponent,
    ManagerDailyreportComponent,
    RegisterComponent,
    EmpLoginComponent,
    EditEmpComponent,
    AdminCustomersComponent,
    AdminCustdetailsComponent,
    ShowBillsComponent,
    ShowSelectedOrderComponent,
    ManagerTablelistComponent,
    ShoworderDetailsComponent,
    AddEmpComponent,
    WaiterBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
