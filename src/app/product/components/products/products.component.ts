import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

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
    this.fetchProducts();
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

  fetchProducts() {
    this.productsService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  createProduct() {

    const product: Product = {
      id: '12345',
      title: 'BRINCOS BRINCOS',
      price: 30000,
      description: 'BBBBBBBB BBBBBBB',
      image: 'assets/images/camiseta.png',
    };

    this.productsService.createProduct(product).subscribe( result => {
      console.log(result);
    });

  }

  updateProduct() {
    const product: Partial<Product> = {
      title: 'Tostadas',
      price: 40000,
      description: 'De mariscos',
      image: 'assets/images/camiseta.png',
    };

    this.productsService.updateProduct('12345', product).subscribe( result => {
      console.log(result);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('12345').subscribe( result => {
      console.log(result);
    });
  }

}
