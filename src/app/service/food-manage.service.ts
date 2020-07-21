import { Injectable } from '@angular/core';
import { Food } from '@app/model/entity/food';
import { Constant } from "@app/config/constant";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodManageService {
  private _sub = new Subject<Array<Food>>();
  private _foods: Array<Food>
  public foods = this._sub.asObservable();

  constructor(
    private http: HttpClient,
    private url: Constant
  ) {
    this.get()
  }

  get() {
    this.http.get<Array<Food>>(this.url.menu()).subscribe(
      data => {
        this._sub.next(data);
        this._foods = data
      }
    )
  }

  update(food: Food) {
    this.http.post(this.url.update(this.url.food), food).subscribe(data => this.get());
  }
  delete(food: Food) {
    this.http.post(this.url.update(this.url.delete), food).subscribe(data => this.get());
  }

  findById(id: string): Food {
    return this._foods.find(i => i.id === id)
  }
}
