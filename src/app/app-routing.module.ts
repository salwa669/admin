import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductComponent } from './Components/product/product.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'',component:MainLayoutComponent,
  children:[
    {path:'Home',component:HomeComponent},
  {path:'Category',component:CategoryComponent},
  {path:'Products',component:ProductComponent},
  
  
]} ,
{path:'Register',component:RegisterComponent}, 
{path:'Login', component:LoginUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
