import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll() {
    return this.httpClient.get<Product[]>(`${environment.api_url}/products`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${environment.api_url}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient.post<Product>(`${environment.api_url}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.httpClient.put<Product>(`${environment.api_url}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete<Product>(`${environment.api_url}/products/${id}`);
  }
}
