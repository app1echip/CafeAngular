import { Injectable } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = new Array<OrderDetails.Item>()
  constructor(private order: OrderService) { }

  add_one(id: string) {
    let item = this.items.find(i => i.id === id)
    if (item) {
      item.qty++
    } else {
      let item = new OrderDetails.Item
      item.id = id
      item.qty = 1
      this.items.push(item)
    }
  }

  remove_one(id: string) {
    let i = this.items.findIndex(e => e.id === id)
    if (i > -1) {
      if (this.items[i].qty == 1) {
        this.items.slice(i, 1)
      } else {
        this.items[i].qty--
      }
    }
  }

  commit() {
    if (this.items.length != 0) {
      this.order.request(this.items)
    }
  }
}
