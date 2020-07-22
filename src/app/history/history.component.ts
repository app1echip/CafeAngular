import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { OrderService } from "@app/service/order.service";
import { Food } from '@app/model/entity/food';
import { FoodManageService } from '@app/service/food-manage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: OrderDetails[]
  getFoodName(id: string) {
    return this.food.findById(id).name
  }
  constructor(private service: OrderService,
    private food: FoodManageService) { }

  ngOnInit(): void { }
  ngDoCheck() {
    this.history = this.service.get()
  }
}