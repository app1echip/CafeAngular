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
  ordres: Array<Ordre>
  ordrefoods: Array<OrdreFood>
  constructor(private service: OrderManageService) { }

  ngOnInit(): void {
    this.service.ordres.subscribe((data) => this.ordres = data);
    this.service.ordrefoods.subscribe((data) => this.ordrefoods = data);
  }
  updateOrdre(ordre: Ordre) {
    this.service.updateOrdre(ordre)
  }
  updateOrdreFood(ordrefood: OrdreFood) {
    this.service.updateOrdreFood(ordrefood)
  }
  deleteOrdre(ordre: Ordre) {
    this.service.deleteOrdre(ordre)
  }
  deleteOrdreFood(ordrefood: OrdreFood) {
    this.service.deleteOrdreFood(ordrefood)
  }
}
