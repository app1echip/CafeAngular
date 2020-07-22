import { Injectable } from '@angular/core';
import { Food } from '@app/model/entity/food';
import { Constant } from "@app/config/constant";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodManageService {
  private _buf: Food[]
  constructor(
    private http: HttpClient,
    private url: Constant
  ) {
    this.fetch()
  }
  fetch() { this.http.get<Food[]>(this.url.menu).subscribe(data => this._buf = data) }
  requestUpdate(body: Food) { this.http.post(this.url.food_update, body).subscribe(data => { }) }
  requestDelete(body: Food) { this.http.post(this.url.food_delete, body).subscribe(data => { }) }
  get(): Food[] { return this._buf }
  findById(id: string): Food { return this._buf.find(i => i.id === id) }
  getCategories(): string[] { return [...new Set(this._buf.map(i => i.cate))] }
  findByCategory(category: string): Food[] { return this._buf.filter(i => i.cate === category) }
  searchByName(name: string): Food[] { return this._buf.filter(i => i.name.includes(name)) }
}
