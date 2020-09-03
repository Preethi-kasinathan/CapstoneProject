import { DeliveryService } from '../../../Service/delivery.service';
import { Delivery } from '../../../Model/delivery';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {

  class: Delivery = new Delivery();
  submitted = false;
  id: number;

  constructor(private route: ActivatedRoute, private classService: DeliveryService,
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
    this.class = new Delivery();
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.classService.updateClass(this.id, this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new Delivery();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.edit();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/delivery-list']);
  }


}
