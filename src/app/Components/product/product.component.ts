import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productForm !: FormGroup;
  constructor(private productService: ProductsService,
    private RefDialoge:MatDialog) { }
  public  prdList :IProduct []=[]; 


  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(prd =>{
      this.prdList = prd
      console.log(this.prdList);
  })
}
res :string=''
confirmDialog(id:number): void {
   
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data=id;
  const dialogRef = this.RefDialoge.open(DeleteProductComponent,dialogConfig );
  dialogRef.afterClosed().subscribe(dialogResult => {
    this.res = dialogResult;
    this.productService.getAllProducts().subscribe(prd =>{
      this.prdList = prd
      console.log(this.prdList);
  })
  });
}
OpenDialoge(){

   const dialogRef = this.RefDialoge.open(AddProductComponent)
    dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.productService.getAllProducts().subscribe(prd =>{
      this.prdList = prd
      console.log(this.prdList);
  })

  });
}
OpenDialogeEdit(prd:IProduct){


  const dialogConfig = new MatDialogConfig();
  dialogConfig.data=prd;
   console.log(dialogConfig.data);
  this.RefDialoge.open(EditProductComponent,dialogConfig);  

}



OpenProductDetails(id:number)
{
  const dialogConfig = new MatDialogConfig();
   dialogConfig.data=id;
   console.log(dialogConfig.data);
  this.RefDialoge.open(ProductDetailsComponent,dialogConfig); }

}

