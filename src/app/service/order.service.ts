import { Injectable } from '@angular/core';
import { OrderDetails } from '@app/model/wrapper/order-details';
import { HttpClient } from '@angular/common/http';
import { Constant } from "@app/config/constant";
import { Subject } from 'rxjs';
import { OrderManageService } from "@app/service/order-manage.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _sub = new Subject<Array<OrderDetails>>();
  private _history: Array<OrderDetails>;
  public history = this._sub.asObservable();

  constructor(
    private http: HttpClient,
    private url: Constant,
    private service: OrderManageService
  ) {
    this.get()
  }
  get() {
    this.http.get<Array<OrderDetails>>(this.url.order()).subscribe(
      data => {
        this._sub.next(data);
        this._history = data;
      }
    );
  }
  request(items: Array<OrderDetails.Item>) {
    this.http.post(this.url.update(this.url.order), items).subscribe(data => this.get())
  }
}
