import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {DefaultResponseType} from "../../../types/default-response.type";
import {OrderType} from "../../../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  createOrder(params:OrderType): Observable<OrderType | DefaultResponseType> {
    return this.http.post<OrderType | DefaultResponseType>(environment.api + 'orders', params, {withCredentials: true})
  }
  getOrders(): Observable<OrderType[] | DefaultResponseType> {
    return this.http.get<OrderType[] | DefaultResponseType>(environment.api + 'orders')
  }

}
