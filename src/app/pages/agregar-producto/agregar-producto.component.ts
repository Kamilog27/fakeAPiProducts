import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  titulo='';
  id='';
  formulario:FormGroup=this.fb.group({
    title:[''],
    price:[''],
    description:[''],
    image:[''],
    category:[''],
  })
  constructor(private productService:ProductService,private fb:FormBuilder,
    private activatedroute:ActivatedRoute,private router:Router) { 
     
  }
  
  ngOnInit(): void {
    this.activatedroute.params.subscribe(({id})=>{
      if(id){
        this.id=id;
        this.titulo='Editar';
        this.productService.getProduct(id).subscribe(res=>{
          this.formulario.patchValue(res);
          
        })  
      }else{

        this.titulo='Agregar';
      }
    })
  }

guardar(){
  if(this.titulo=='Agregar'){
    this.productService.postProduct(this.formulario.value).subscribe(res=>{
      this.router.navigateByUrl('/home');
    })
  }else if(this.titulo=='Editar'){
    
    this.productService.patchProduct(this.id,this.formulario.value).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/home');
    })
  }
}

}
