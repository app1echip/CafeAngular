import { Component, OnInit } from '@angular/core';
import { Food } from '../model/entity/food';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.css']
})
export class ManageFoodComponent implements OnInit {
  base_url = 'http://localhost:8080'
  foods: Food[]
  nf = new Food()
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Food[]>(this.base_url + '/admin/food').subscribe(data => this.foods = data);
  }

  update_food(f: Food) {
    this.http.post(this.base_url + '/admin/food/update', f).subscribe(data => console.log(data))
  }
  delete_food(f: Food) {
    this.http.post(this.base_url + '/admin/food/delete', f).subscribe(data => console.log(data))
  }
}
