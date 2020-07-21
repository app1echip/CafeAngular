import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { CartService } from '@app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service: CartService) { }

  ngOnInit(): void {
  }
  @Input() products: Array<OrderDetails.Item>

  commit() {
    this.service.commit()
  }
}
