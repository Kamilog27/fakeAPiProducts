import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:product;
  constructor(private productService:ProductService,
              private activateRoute:ActivatedRoute) { }

              
    ngOnInit(): void {
    this.activateRoute.params.subscribe(({id})=>{
      this.productService.getProduct(id).subscribe(product=>{
        this.product=product;
      })
    })
  }

}
