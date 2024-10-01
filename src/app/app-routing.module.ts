import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotFoundError } from 'rxjs';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:"home",component:HomeComponent},
 //{ path:"", redirectTo: '/home' , pathMatch:'full'},
  { path:"products/:id" , component: ProductComponent},
  { path:"**", component: NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
