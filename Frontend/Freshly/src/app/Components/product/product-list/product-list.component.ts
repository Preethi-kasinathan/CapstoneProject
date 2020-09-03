import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../Model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  classes: Observable<Product[]>;
    class: Product[];

    constructor(private classService: ProductService,
                private router: Router) {}

    // tslint:disable-next-line:typedef
    ngOnInit() {
      this.getClasses();
    }

    // tslint:disable-next-line:typedef
    getClasses() {
      this.classService.getAllClasssList().subscribe((res => {
        console.log(res);
        this.class = res as Product[];
      }));
    }

    // tslint:disable-next-line:typedef
    deleteClass(id: number) {
      this.classService.deleteClass(id)
        .subscribe(
          data => {
            console.log(data);
            this.getClasses();
          },
          error => console.log(error));
    }

    // tslint:disable-next-line:typedef
    classDetails(id: number){
      this.router.navigate(['/product-detail', id]);
    }

    // tslint:disable-next-line:typedef
    EditClass(id: number){
      this.router.navigate(['/edit-product', id]);
    }

    DeliveryClass(): void
    {
      this.router.navigate(['/delivery']);
    }


}
