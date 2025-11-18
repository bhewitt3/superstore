import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [AsyncPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private activatedRoute = inject(ActivatedRoute);
  private productService: ProductService = inject(ProductService)
  userId: string | null;
  product$: Observable<Product>;

  constructor() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.product$ = this.productService.getProductById(this.userId!);

  }
}
