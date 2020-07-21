import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constant {
    host = 'http://localhost:8080'
    /* public api */
    authenticate = () => this.host + '/pub/authenticate'
    register = () => this.host + '/pub/register'
    menu = () => this.host + '/pub/menu'
    /* authenticated api */
    profile = () => this.host + '/api/profile'
    order = () => this.host + '/api/order'
    /* super user api */
    food = () => this.host + '/admin/food'
    ordre = () => this.host + '/admin/ordre'
    ordre_food = () => this.host + '/admin/ordre_food'
    user = () => this.host + '/admin/user'
    user_role = () => this.host + '/admin/user_role'
    /* update and delete */
    update = (entity: Function) => entity() + '/update'
    delete = (entity: Function) => entity() + '/delete'
}
