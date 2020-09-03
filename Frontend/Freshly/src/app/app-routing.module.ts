import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/Components/home/home.component';
import { AboutComponent } from '../app/Components/about/about.component';
import { ProductComponent } from '../app/Components/product/product.component';
import { ServiceComponent } from '../app/Components/service/service.component';
import { AdminComponent } from '../app/Components/admin/admin.component';
import { ContactComponent } from '../app/Components/contact/contact.component';
import { ContactListComponent } from '../app/Components/contact/contact-list/contact-list.component';
import { ContactDetailComponent } from '../app/Components/contact/contact-detail/contact-detail.component';
import { EditContactComponent } from '../app/Components/contact/edit-contact/edit-contact.component';
import { CreateProductComponent } from '../app/Components/product/create-product/create-product.component';
import { ProductListComponent } from '../app/Components/product/product-list/product-list.component';
import { ProductDetailComponent } from '../app/Components/product/product-detail/product-detail.component';
import { EditProductComponent } from '../app/Components/product/edit-product/edit-product.component';
import { DeliveryComponent } from '../app/Components/delivery/delivery.component';
import { DeliveryListComponent } from '../app/Components/delivery/delivery-list/delivery-list.component';
import { DeliveryDetailComponent } from '../app/Components/delivery/delivery-detail/delivery-detail.component';
import { EditDeliveryComponent } from '../app/Components/delivery/edit-delivery/edit-delivery.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'service', component: ServiceComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'contact-list', component: ContactListComponent},
  { path: 'contact-detail', component: ContactDetailComponent},
  { path: 'edit-contact', component: EditContactComponent},
  { path: 'create-product', component: CreateProductComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-detail', component: ProductDetailComponent},
  { path: 'edit-product', component: EditProductComponent},
  { path: 'delivery', component: DeliveryComponent},
  { path: 'delivery-list', component: DeliveryListComponent},
  { path: 'delivery-detail', component: DeliveryDetailComponent},
  { path: 'edit-delivery', component: EditDeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
