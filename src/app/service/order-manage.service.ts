import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ordre } from '@app/model/entity/ordre';
import { OrdreFood } from '@app/model/entity/ordre-food';
import { HttpClient } from '@angular/common/http';
import { Constant } from '@app/config/constant';

@Injectable({
  providedIn: 'root'
})
export class OrderManageService {
  private _subOrdre = new Subject<Array<Ordre>>();
  private _subFood = new Subject<Array<OrdreFood>>();
  private _ordres: Array<Ordre>;
  private _ordre_foods: Array<OrdreFood>;
  public ordres = this._subOrdre.asObservable();
  public ordrefoods = this._subFood.asObservable();
  constructor(
    private http: HttpClient,
    private url: Constant
  ) { this.getOrdre(); this.getOrdreFood() }

  getOrdreFood() {
    this.http.get<Array<OrdreFood>>(this.url.ordre_food()).subscribe(
      data => {
        this._subFood.next(data);
        this._ordre_foods = data;
      }
    )
  }

  getOrdre() {
    this.http.get<Array<Ordre>>(this.url.ordre()).subscribe(
      data => {
        this._subOrdre.next(data);
        this._ordres = data;
      }
    )
  }

  updateOrdre(ordre: Ordre) {
    this.http.post(this.url.update(this.url.ordre), ordre).subscribe(
      data => { }
    )
  }
  updateOrdreFood(ordrefood: OrdreFood) {
    this.http.post(this.url.update(this.url.ordre_food), ordrefood).subscribe(
      data => { }
    )
  }


  deleteOrdre(ordre: Ordre) {
    this.http.post(this.url.delete(this.url.ordre), ordre).subscribe(
      data => { }
    )
  }
  deleteOrdreFood(ordrefood: OrdreFood) {
    this.http.post(this.url.delete(this.url.ordre_food), ordrefood).subscribe(
      data => { }
    )
  }
}
