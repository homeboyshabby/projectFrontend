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
    ReservationsComponent
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
