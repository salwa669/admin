import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private prdService:ProductsService
    ,private router:Router) {
   
  }
  

  ngOnInit() {
  }
  Cancel(): void {
    this.dialogRef.close(false);
  }
  onDelete(): void {
    this.prdService.deleteProduct(this.data).subscribe( pro=>{
      console.log("product deleted");
      this.router.navigate(['/Products']);
    });
    this.dialogRef.close(true);
  }

}
