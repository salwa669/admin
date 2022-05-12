import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './Components/home/home.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './Components/category/category.component';
import { ProductComponent } from './Components/product/product.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductComponent } from './Components/add-product/add-product.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/delete-product/delete-product.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { DeleteCategoryComponent } from './Components/delete-category/delete-category.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    RegisterComponent,
    LoginUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteProductComponent]
})
export class AppModule { }
