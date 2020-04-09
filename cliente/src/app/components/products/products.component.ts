import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Product[] = []

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res['products']
      }
    )
  }

  deleteProduct(id:string){
    this.productService.deleteProducts(id).subscribe(
      (res) => {
        this.getProducts()
      }
    )
  }


}
