import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarjetaComponent,
    NavbarComponent,
    ProductsComponent,
    ProductsFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
