import { Product } from '../../../Model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  class: Product;

  constructor(private route: ActivatedRoute, private router: Router,
              private classService: ProductService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.class = new Product();

    this.id = this.route.snapshot.params.id;

    this.classService.getClass(this.id)
      .subscribe(data => {
        this.class = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['/product-list']);
  }


}
