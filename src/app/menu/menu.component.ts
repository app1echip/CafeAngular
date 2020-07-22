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
  _plain = true
  current_cate: string = null
  cates: String[]
  display: Array<Food>
  in_cart: number

  constructor(
    private service: FoodManageService,
    private cart: CartService
  ) { }

  ngOnInit(): void { }
  ngDoCheck() {
    if (this._plain) {
      this.display = this.service.get()
    }
    this.in_cart = this.cart.getItemCount()
    this.cates = this.service.getCategories()
  }

  addItem(id: string) { this.cart.addOneItem(id) }
  removeItem(id: string) { this.cart.removeOneItem(id) }

  select(cate: string = null) {
    this._plain = (cate == null)
    this.current_cate = cate
    if (!this._plain)
      this.display = this.service.findByCategory(cate)
  }

  search(value: string) {
    value = value.trim()
    this._plain = (value.length == 0)
    if (!this._plain)
      this.display = this.service.searchByName(value.trim())
  }
  getSelected(id: string) {
    return this.cart.getSpecificItem(id)
  }
}