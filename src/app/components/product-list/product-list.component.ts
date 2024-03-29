import { InterpolationConfig } from '@angular/compiler';
import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  searchText: string = ""
  sortText: string = ""
  priceRange: string = ""

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(foundProducts => {
    //   console.log(foundProducts);
    //   this.productList = foundProducts;
    this.onSearch();
  }
  onDelete(id: number) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.productService.deleteProductByID(id).subscribe(response => {
        console.log(response);
        window.location.reload();
      });
    }
  }
  onSearch() {
    this.productService.getProductsBySearch(this.searchText).subscribe(foundProducts => {
      console.log(foundProducts);
      this.productList = foundProducts;

    })
  }
  onSort() {
    this.productService.getProductsBySort(this.sortText).subscribe(foundProducts => {
      console.log(foundProducts);
      this.productList = foundProducts;

    })
  }
  onPrice() {
    this.productService.getProductsByPrice(this.priceRange).subscribe(foundProducts => {
      console.log(foundProducts);
      this.productList = foundProducts;

    })
  }
}