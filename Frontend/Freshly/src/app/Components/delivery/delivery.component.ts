import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../Service/delivery.service';
import { Delivery } from '../../Model/delivery';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  class: Delivery;
  submitted = false;

  constructor(private classService: DeliveryService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.class = new Delivery();
  }

  newClass(): void {
    this.submitted = false;
    this.class = new Delivery();
  }

  // tslint:disable-next-line:typedef
  save() {
    console.log(this.class.name);
    this.classService.createClass(this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new Delivery();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/']);
  }



}
