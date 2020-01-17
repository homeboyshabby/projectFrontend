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

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"waiter",component:WaiterComponent,children:[{path:'menu',component:MenuListComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"table",component:TableListComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"order",component:TakeOrderComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"bills",component:BillsComponent}]},
  {path:"waiter",component:WaiterComponent,children:[{path:"menu/:id",component:TakeOrderComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"onlineorder",component:OnlineOrderComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"addmenu",component:AddMenuComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"addtables",component:AddTablesComponent}]},
  {path:"admin",component:AdminComponent,children:[{path:"updateemp",component:UpdateEmpComponent}]},
  {path:"manager",component:ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
