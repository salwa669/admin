import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prd :IProduct={} as IProduct;
  constructor(private activeRoute: ActivatedRoute,
    private router: Router ,
     private productService: ProductsService,
     private dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {
    this.productService.getProductById(this.data).subscribe(prod=>{this.prd=prod});
  }
  close(){
    this.dialogRef.close();
  }
  
}
