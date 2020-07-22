import { Injectable } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { OrderService } from '@app/service/order.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items = new Array<OrderDetails.Item>()
  constructor(private order: OrderService) { }
  get(): OrderDetails.Item[] { return this._items }
  addOneItem(id: string) {
    let item = this._items.find(i => i.id === id)
    if (item) {
      item.qty++
    } else {
      let item = new OrderDetails.Item
      item.id = id
      item.qty = 1
      this._items.push(item)
    }
  }
  removeOneItem(id: string) {
    let i = this._items.findIndex(e => e.id === id)
    if (i > -1) {
      if (this._items[i].qty == 1) {
        this._items.splice(i, 1)
      } else {
        this._items[i].qty--
      }
    }
  }
  commit() {
    if (this._items.length != 0) {
      this.order.request(this._items)
    }
  }
  getItemCount(): number { return this._items.map(i => i.qty).reduce((a, b) => a + b, 0) }
  getSpecificItem(id: string): number {
    let fd = this._items.find(i => i.id === id)
    return fd ? fd.qty : 0
  }
}
