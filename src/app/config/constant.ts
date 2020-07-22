import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constant {
    private readonly host = 'http://localhost:8080';
    readonly authenticate = this.host + '/pub/authenticate';
    readonly register = this.host + '/pub/register';
    readonly menu = this.host + '/pub/menu';
    readonly profile = this.host + '/api/profile';
    readonly profile_update = this.host + '/api/profile/update';
    readonly order = this.host + '/api/order';
    readonly order_new = this.host + '/api/order/new';
    readonly food = this.host + '/admin/food';
    readonly food_update = this.host + '/admin/food/update';
    readonly food_delete = this.host + '/admin/food/delete';
    readonly ordre = this.host + '/admin/ordre';
    readonly ordre_update = this.host + '/admin/ordre/update';
    readonly ordre_delete = this.host + '/admin/ordre/delete';
    readonly ordrefood = this.host + '/admin/ordre_food';
    readonly ordrefood_update = this.host + '/admin/ordre_food/update';
    readonly ordrefood_delete = this.host + '/admin/ordre_food/delete';
    readonly user = this.host + '/admin/user';
    readonly user_update = this.host + '/admin/user/update';
    readonly user_delete = this.host + '/admin/user/delete';
    readonly userrole = this.host + '/admin/user_role';
    readonly userrole_update = this.host + '/admin/user_role/update';
}
