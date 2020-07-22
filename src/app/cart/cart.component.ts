import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { CartService } from '@app/service/cart.service';
import { FoodManageService } from '@app/service/food-manage.service';
import { Food } from '@app/model/entity/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: OrderDetails.Item[]
  constructor(
    private service: CartService,
    private food: FoodManageService
  ) { }
  disp = ['name', 'price', 'qty', 'total']
  ngOnInit(): void { }
  ngDoCheck() { this.products = this.service.get() }
  commit() { this.service.commit() }
  getTotalCost(): number { return this.getDetail().map(i => i.total).reduce((a, b) => a + b, 0) }
  getTotalNumber(): number { return this.getDetail().map(i => i.qty).reduce((a, b) => a + b, 0) }
  getDetail(): CartDetail[] { return this.products.map(i => new CartDetail(this.food.findById(i.id), i.qty)) }
}
class CartDetail {
  name: string;
  price: number;
  qty: number;
  total: number;
  constructor(us: Food, qty: number,) {
    this.name = us.name
    this.price = us.price
    this.qty = qty
    this.total = this.qty * this.price
  }
}

