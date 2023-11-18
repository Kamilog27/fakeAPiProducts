import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // baseurl:string='http://localhost:3000/productos';
  baseurl:string='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }

  postProduct(product:product):Observable<product>{
    return this.http.post<product>(`${this.baseurl}`,product);
  }
  getProducts():Observable<product[]>{
    return this.http.get<product[]>(`${this.baseurl}`);
  }
  getProduct(id:number):Observable<product>{
    return this.http.get<product>(`${this.baseurl}/${id}`);
  }
  patchProduct(id:string,formulario:product):Observable<product>{
    console.log(formulario);
    return this.http.patch<product>(`${this.baseurl}/${id}`,formulario);
  }

}
