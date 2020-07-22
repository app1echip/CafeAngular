import { Injectable } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { HttpClient } from '@angular/common/http';
import { Constant } from "@app/config/constant";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _buf: OrderDetails[];
  constructor(
    private http: HttpClient,
    private url: Constant
  ) {
    this.fetch()
  }
  fetch() { this.http.get<OrderDetails[]>(this.url.order).subscribe(data => this._buf = data) }
  request(body: OrderDetails.Item[]) { this.http.post(this.url.order_new, body).subscribe(data => { }) }
  get(): OrderDetails[] { return this._buf }
}
