import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../Model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  class: Product;
  submitted = false;

  constructor(private classService: ProductService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.class = new Product();
  }

  newClass(): void {
    this.submitted = false;
    this.class = new Product();
  }

  // tslint:disable-next-line:typedef
  save() {
    console.log(this.class.product);
    this.classService.createClass(this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new Product();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/product-list']);
  }



}
