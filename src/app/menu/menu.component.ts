import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/model/entity/food';
import { OrderDetails } from '../model/wrapper/order-details';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  base_url = 'http://localhost:8080'

  foods: Food[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Food[]>(this.base_url + '/pub/menu').subscribe(data => this.foods = data);
  }

  all_food: Food[]
  cart_item = new Array<OrderDetails.Item>()

  add_item(id: string) {
    let exist = false
    for (var p of this.cart_item) {
      if (p.id === id) {
        exist = true
        p.qty = p.qty + 1
      }
    }
    if (!exist) {
      var newItem = new OrderDetails.Item()
      newItem.id = id
      newItem.qty = 1
      this.cart_item.push(newItem)
    }
  }
  minus_item(id: string) {
    for (var p of this.cart_item) {
      if (p.id === id) {
        p.qty = p.qty - 1
      }
    }
    this.cart_item = this.cart_item.filter(function (element) {
      return element.qty != 0
    });
  }

  push_item() {
    if (this.cart_item.length != 0) {
      this.http.post(this.base_url + '/api/order/new', this.cart_item).subscribe(data => console.log(data))
    }
  }
}
