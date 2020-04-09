import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: 'product',
    children: [
      { 
        path: '', 
        component: ProductsComponent
      },
      { 
        path: 'create', 
        component: ProductsFormComponent
      },
      { 
        path: 'edit/:id', 
        component: ProductsFormComponent
      }
    ]
  },
  { path: '', pathMatch: 'full' ,redirectTo: 'product' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
