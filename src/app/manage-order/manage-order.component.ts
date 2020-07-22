import { Component, OnInit } from '@angular/core';
import { Ordre } from "@app/model/entity/ordre";
import { OrdreFood } from "@app/model/entity/ordre-food";
import { OrderManageService } from '@app/service/order-manage.service';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  ordres: Ordre[]
  ordrefoods: OrdreFood[]
  constructor(private service: OrderManageService) { }
  ngOnInit(): void { }
  ngDoCheck() {
    this.ordres = this.service.getOrdres()
    this.ordrefoods = this.service.getOrdreFoods()
  }
  updateOrdre(body: Ordre) { this.service.requestUpdateOrdre(body) }
  updateOrdreFood(body: OrdreFood) { this.service.requestUpdateOrdreFood(body) }
  deleteOrdre(body: Ordre) { this.service.requestDeleteOrdre(body) }
  deleteOrdreFood(body: OrdreFood) { this.service.requestDeleteOrdreFood(body) }
}
