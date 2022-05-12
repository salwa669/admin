import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductsService } from 'src/app/Services/products.service';
import { environment } from 'src/environments/environment';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  progress: number = 0;
  public catList: ICategory[] = [];
  message: string = '';

  @Output() public onUploadFinished = new EventEmitter();

  public productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder
    , private prodService: ProductsService,
    private router: Router,
    private http: HttpClient,
    private catService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    public customStripeForm: FormGroup

  ) { }

  getCurrentPrdId: number = 0;
  product: IProduct = {} as IProduct
  selectedCategoryId: number = 0;
  public prdList: IProduct[] = [];
  
  ngOnInit(): void {
    this.customStripeForm = this.formBuilder.group({
      name: [ "", Validators.required ],
    });

      this.prodService.getProductById(this.data.id).subscribe(prd => {
        this.product = prd;
      });
    
    /////get category

   



  
  }
  editProduct() {
    console.log("Enter edit product");
    console.log(this.product)
    console.log(this.data)

    this.data.name=this.product.name ;
    console.log("name");

     this.data.price=this.product.price ;
    console.log("price");

     this.data.quantity=this.product.quantity;
    console.log("quantity");

      this.data.image=this.product.image;
  console.log(this.product)
  this.prodService.editProduct(this.data.id,this.product).subscribe(prd => {
    this.router.navigate(['/Products']);
    // alert("Product added");
    let ref = document.getElementById("cancel")
    ref?.click();
    this.productForm.reset();


  });

   }

uploadFile = (files: any, file: string) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);

  this.http.post(`${environment.APIBaseUrl}/Product/uploadImage`, formData,
   { reportProgress: true, observe: 'events' })
    .subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded);
        else if (event.type === HttpEventType.Response) {
          console.log(JSON.stringify(event.body));
          console.log(file);
          this.product.image = file.split('\\')[2];
          this.message = 'Upload success.';
          // this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });

}


  onEdit(row :any){
    this.productForm.controls['name'].setValue(row.name);
    this.productForm.controls['price'].setValue(row.price);
    this.productForm.controls['quantity'].setValue(row.quantity);
    this.productForm.controls['image'].setValue(row.image);
    this.productForm.controls['categoryId'].setValue(row.categoryId);
  }
  

}
