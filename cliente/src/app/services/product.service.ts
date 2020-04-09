import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private configUrl = 'http://localhost:3000';
  private headers = new HttpHeaders({
    'Content-Type': `application/json`
  })
  
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.configUrl}/products`, {responseType: 'json'})
  }
  
  public getProduct(id:string): Observable<Product>{
    return this.http.get<Product>(`${this.configUrl}/products/${id}`)
  }

  public createProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(`${this.configUrl}/products/create`, product)
  }
  
  public deleteProducts(id:string): Observable<Product>{
    return this.http.delete<Product>(`${this.configUrl}/products/delete?id=${id}`)
  }
  
  public updateProducts(id:string, product:Product): Observable<Product>{
    return this.http.put<Product>(`${this.configUrl}/products/update/${id}`, product)
  }
}
