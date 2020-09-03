import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
import { ServiceComponent } from './Components/service/service.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ContactDetailComponent } from './Components/contact/contact-detail/contact-detail.component';
import { ContactListComponent } from './Components/contact/contact-list/contact-list.component';
import { EditContactComponent } from './Components/contact/edit-contact/edit-contact.component';
import { ProductDetailComponent } from './Components/product/product-detail/product-detail.component';
import { ProductListComponent } from './Components/product/product-list/product-list.component';
import { EditProductComponent } from './Components/product/edit-product/edit-product.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { DeliveryDetailComponent } from './Components/delivery/delivery-detail/delivery-detail.component';
import { DeliveryListComponent } from './Components/delivery/delivery-list/delivery-list.component';
import { EditDeliveryComponent } from './Components/delivery/edit-delivery/edit-delivery.component';
import { CreateProductComponent } from './Components/product/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProductComponent,
    ServiceComponent,
    AdminComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactListComponent,
    EditContactComponent,
    ProductDetailComponent,
    ProductListComponent,
    EditProductComponent,
    DeliveryComponent,
    DeliveryDetailComponent,
    DeliveryListComponent,
    EditDeliveryComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
