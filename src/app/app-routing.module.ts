import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprasHomeComponent } from './pages/compras-home/compras-home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';


const routes: Routes = [
  {path:'home',component:ComprasHomeComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'addproduct',component:AgregarProductoComponent},
  {path:'addproduct/:id',component:AgregarProductoComponent},
  {path:'producto/perfil',loadChildren: ()=>import ('./pages/product/perfil.module').then(m=>m.PerfilModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
