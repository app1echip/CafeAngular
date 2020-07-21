import { Component, OnInit } from '@angular/core';
import { Food } from '@app/model/entity/food';
import { FoodManageService } from '@app/service/food-manage.service';

@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.css']
})
export class ManageFoodComponent implements OnInit {
  foods: Array<Food>
  empty = new Food()
  constructor(
    private service: FoodManageService
  ) { }

  ngOnInit(): void {
    this.service.foods.subscribe((data) => this.foods = data);
  }

  update_food(food: Food) {
    this.service.update(food);
  }
  delete_food(food: Food) {
    this.service.delete(food);
  }
}
