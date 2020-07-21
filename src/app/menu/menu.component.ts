import { Component, OnInit } from '@angular/core';
import { Food } from '@app/model/entity/food';
import { FoodManageService } from "@app/service/food-manage.service";
import { CartService } from "@app/service/cart.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Array<Food>

  constructor(
    private service: FoodManageService,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.service.foods.subscribe((data) => this.menu = data);
  }

  add_item(id: string) {
    this.cart.add_one(id)
  }
  minus_item(id: string) {
    this.cart.remove_one(id)
  }
}
