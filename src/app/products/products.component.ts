import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getAll();
  }

  addItem() {
    // this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    // this.items.splice(index, 1);
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
