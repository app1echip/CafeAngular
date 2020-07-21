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
