import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  product:Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: ''
  }

  edit: boolean = false;


  constructor(
    private productService: ProductService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params
    if (params.id) {
      console.log(params)
      this.productService.getProduct(params.id).subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.edit = true;
        }
      )
    }
  }


  submitProduct(){
    this.productService.createProduct(this.product).subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  updateProduct(){
    delete this.product.createdAt;
    this.productService.updateProducts(this.product._id, this.product).subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }
}
