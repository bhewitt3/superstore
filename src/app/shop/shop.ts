import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { ProductsResponse } from '../product';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ɵEmptyOutletComponent } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop',
  imports: [AsyncPipe],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit{
  private productService: ProductService = inject(ProductService);
  private router: Router = inject(Router);
  data$!: Observable<ProductsResponse>;
  
  navigateToDetails(productId: number): void {
    this.router.navigate(['/shop', productId]);
  }

  ngOnInit(): void {
    this.data$ = this.productService.getAllProducts();
  }
}
