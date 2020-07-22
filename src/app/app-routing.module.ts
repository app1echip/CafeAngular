import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from '@app/history/history.component';
import { LoginComponent } from '@app/login/login.component';
import { ManageFoodComponent } from '@app/manage-food/manage-food.component';
import { ManageOrderComponent } from '@app/manage-order/manage-order.component';
import { ManageUserComponent } from '@app/manage-user/manage-user.component';
import { MenuComponent } from '@app/menu/menu.component';
import { ProfileComponent } from '@app/profile/profile.component';
import { RegisterComponent } from '@app/register/register.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: ManageUserComponent },
  { path: 'food', component: ManageFoodComponent },
  { path: 'order', component: ManageOrderComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
