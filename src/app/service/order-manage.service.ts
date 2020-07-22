import { Injectable } from '@angular/core';
import { Ordre } from '@app/model/entity/ordre';
import { OrdreFood } from '@app/model/entity/ordre-food';
import { HttpClient } from '@angular/common/http';
import { Constant } from '@app/config/constant';

@Injectable({
  providedIn: 'root'
})
export class OrderManageService {
  private _buf_o: Ordre[]
  private _buf_of: OrdreFood[]
  constructor(
    private http: HttpClient,
    private url: Constant
  ) { this.fetchOrdre(); this.fetchOrdreFood() }
  fetchOrdre() { this.http.get<Ordre[]>(this.url.ordre).subscribe(data => this._buf_o = data) }
  requestDeleteOrdre(body: Ordre) { this.http.post(this.url.ordre_delete, body).subscribe(data => { }) }
  requestUpdateOrdre(body: Ordre) { this.http.post(this.url.ordre_update, body).subscribe(data => { }) }
  fetchOrdreFood() { this.http.get<OrdreFood[]>(this.url.ordrefood).subscribe(data => this._buf_of = data) }
  requestUpdateOrdreFood(body: OrdreFood) { this.http.post(this.url.ordrefood_update, body).subscribe(data => { }) }
  requestDeleteOrdreFood(body: OrdreFood) { this.http.post(this.url.ordrefood_delete, body).subscribe(data => { }) }
  getOrdres(): Ordre[] { return this._buf_o }
  getOrdreFoods(): OrdreFood[] { return this._buf_of }
}
