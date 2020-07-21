import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '../model/wrapper/order-details';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() products: Array<OrderDetails.Item>
}
