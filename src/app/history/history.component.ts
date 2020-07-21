import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { OrderService } from "@app/service/order.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: Array<OrderDetails>
  constructor(
    private service: OrderService
  ) { }

  ngOnInit(): void {
    this.service.history.subscribe((data) => this.history = data);
  }
}
