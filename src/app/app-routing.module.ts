import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotFoundError } from 'rxjs';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:"home",component:HomeComponent},
 { path:"", redirectTo: '/home' , pathMatch:'full'},

  { path:"produits/:id" , component: ProductComponent},
  
  { path:'products', loadChildren: () => 
    import ('./features/product/product.module')
    .then((m) => m.ProductModule)
  },
  { path:'apropos', loadChildren: () => 
    import ('./features/apropos/apropos.module')
    .then((m) => m.AproposModule)
  },
  { path:'contact', loadChildren: () => 
    import ('./features/contact/contact.module')
    .then((m) => m.ContactModule)
  },
  { path:'profile', loadChildren: () => 
    import ('./features/profile/profile.module')
    .then((m) => m.ProfileModule)
  },
  { path:"**", component: NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
