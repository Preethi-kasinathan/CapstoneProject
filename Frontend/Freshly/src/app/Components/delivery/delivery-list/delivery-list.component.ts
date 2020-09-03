import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryService } from '../../../Service/delivery.service';
import { Delivery } from '../../../Model/delivery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  classes: Observable<Delivery[]>;
    class: Delivery[];

    constructor(private classService: DeliveryService,
                private router: Router) {}

    // tslint:disable-next-line:typedef
    ngOnInit() {
      this.getClasses();
    }

    // tslint:disable-next-line:typedef
    getClasses() {
      this.classService.getAllClasssList().subscribe((res => {
        console.log(res);
        this.class = res as Delivery[];
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
      this.router.navigate(['/delivery-detail', id]);
    }

    // tslint:disable-next-line:typedef
    EditClass(id: number){
      this.router.navigate(['/edit-delivery', id]);
    }

    DeliveryCheckClass(): void
    {
      this.router.navigate(['/']);
    }


}
