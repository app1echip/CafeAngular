import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from 'src/app/model/wrapper/order-details';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  base_url = 'http://localhost:8080'
  history: OrderDetails[]
  constructor(private http: HttpClient) {
    http.get<OrderDetails[]>(this.base_url + '/api/order').subscribe(data => this.history = data)
  }

  ngOnInit(): void {
  }

}
