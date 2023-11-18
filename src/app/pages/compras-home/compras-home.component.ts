import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-compras-home',
  templateUrl: './compras-home.component.html',
  styleUrls: ['./compras-home.component.css']
})
export class ComprasHomeComponent implements OnInit {
  products:product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(producto=>{
      this.products=producto;
    })
  }

}
