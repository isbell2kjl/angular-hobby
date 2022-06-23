import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: number = 0;

  currentProduct: Product = new Product()

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.id = this.activatedRoute.snapshot.params['id'];

    this.productService.getProductByID(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct;
    })
  }
  onSubmit() {
    this.productService.editProductByID(this.id, this.currentProduct).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products");
    })
  }

}
