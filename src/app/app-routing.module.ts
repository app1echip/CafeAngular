import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageFoodComponent } from './manage-food/manage-food.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'super/user', component: ManageUserComponent },
  { path: 'super/food', component: ManageFoodComponent },
  { path: 'super/order', component: ManageOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
