import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CartComponent } from '@app/cart/cart.component';
import { HeaderInterceptor } from '@app/config/header-interceptor';
import { HistoryComponent } from '@app/history/history.component';
import { LoginComponent } from '@app/login/login.component';
import { ManageFoodComponent } from '@app/manage-food/manage-food.component';
import { ManageOrderComponent } from '@app/manage-order/manage-order.component';
import { ManageUserComponent } from '@app/manage-user/manage-user.component';
import { MenuComponent } from '@app/menu/menu.component';
import { ProfileComponent } from '@app/profile/profile.component';
import { RegisterComponent } from '@app/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HistoryComponent,
    ProfileComponent,
    CartComponent,
    ManageUserComponent,
    ManageFoodComponent,
    ManageOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
