import { Component, OnInit } from '@angular/core';
import { Food } from '@app/model/entity/food';
import { FoodManageService } from '@app/service/food-manage.service';

@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.css']
})
export class ManageFoodComponent implements OnInit {
  foods: Food[]
  empty = new Food
  constructor(private service: FoodManageService) { }
  ngOnInit(): void { }
  ngDoCheck() { this.foods = this.service.get() }
  update(body: Food) { this.service.requestUpdate(body) }
  delete(body: Food) { this.service.requestDelete(body) }
}
