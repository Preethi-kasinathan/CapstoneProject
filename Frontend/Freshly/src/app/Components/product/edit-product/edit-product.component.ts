import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../Model/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  class: Product = new Product();
  submitted = false;
  id: number;

  constructor(private route: ActivatedRoute, private classService: ProductService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.classService.getClass(this.id)
      .subscribe(data => {
        console.log(data);
        this.class = data;
      }, error => console.log(error));
  }

  newClass(): void {
    this.submitted = false;
    this.class = new Product();
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.classService.updateClass(this.id, this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new Product();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.edit();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/product-list']);
  }



}
