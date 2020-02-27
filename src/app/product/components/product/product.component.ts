import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
  } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
selector: 'app-product',
templateUrl: './product.component.html',
styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    constructor(private cartService: CartService){

    }

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    ngOnInit() {}

    addCart() {
        this.cartService.addCart(this.product);
    }
}
