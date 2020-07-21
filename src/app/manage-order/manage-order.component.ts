import { Component, OnInit } from '@angular/core';
import { Ordre } from "src/app/model/entity/ordre";
import { OrdreFood } from "src/app/model/entity/ordre-food";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  base_url = 'http://localhost:8080'
  orders: Array<Ordre>
  ofs: Array<OrdreFood>
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<Ordre>>(this.base_url + '/admin/ordre').subscribe(data => this.orders = data)
    this.http.get<Array<OrdreFood>>(this.base_url + '/admin/ordre_food').subscribe(data => this.ofs = data)
  }
  update_order(o: Ordre) {
    this.http.post(this.base_url + '/admin/ordre/update', o).subscribe(data => console.log(data))
  }
  update_order_food(o: OrdreFood) {
    this.http.post(this.base_url + '/admin/ordre_food/update', o).subscribe(data => console.log(data))
  }
  delete_order(o: Ordre) {
    this.http.post(this.base_url + '/admin/ordre/delete', o).subscribe(data => console.log(data))
  }
  delet_order_food(o: OrdreFood) {
    this.http.post(this.base_url + '/admin/ordre_food/delete', o).subscribe(data => console.log(data))
  }
}
