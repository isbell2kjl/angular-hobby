import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    const id = this.activatedRoute.snapshot.params['id'];

    this.productService.getProductByID(id).subscribe(result => {
      this.product = result;
    })
  }

  onDelete(id: number) {
    this.productService.deleteProductByID(id).subscribe(response => {
      console.log(response);
    });
  }
}
