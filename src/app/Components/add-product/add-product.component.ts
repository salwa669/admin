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
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: number


  ) { }

  getCurrentPrdId: number = 0;
  newProduct: IProduct = {} as IProduct
  selectedCategoryId: number = 0;
  public prdList: IProduct[] = [];

  ngOnInit(): void {
    this.getCurrentPrdId = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if (this.getCurrentPrdId != 0) {
      this.prodService.getProductById(this.getCurrentPrdId).subscribe(prd => {
        this.newProduct = prd;
      });
    }
    /////get category

    this.catService.getAllCategories().subscribe(
      categories => { this.catList = categories })



    this.productForm = this.formBuilder.group({

      productId: ['', Validators.required]

      , name: ['', Validators.required],
      quantity: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]

    })
  }
  row:any;
  addProduct()
   {
    this.getCurrentPrdId = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if (this.getCurrentPrdId != 0) {
      this.onEdit(this.row);
    this.prodService.editProduct(+this.data, this.newProduct).subscribe(prd => {
      console.log(this.newProduct)
      this.router.navigate(['/Products']);
    });
  }

    else{
  this.newProduct.name = this.productForm.value.name;
  this.newProduct.price = this.productForm.value.price;
  this.newProduct.quantity = this.productForm.value.quantity;
  this.newProduct.image = this.productForm.value.image;
  this.newProduct.categoryId = this.productForm.value.categoryId;
  console.log(this.newProduct)
  this.prodService.addNewProduct(this.newProduct).subscribe(prd => {
    this.router.navigate(['/Products']);
    // alert("Product added");
    let ref = document.getElementById("cancel")
    ref?.click();
    this.productForm.reset();


  });
}
   }

uploadFile = (files: any, file: string) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);

  this.http.post(`${environment.APIBaseUrl}Product/uploadImage`, formData, { reportProgress: true, observe: 'events' })
    .subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded);
        else if (event.type === HttpEventType.Response) {
          console.log(JSON.stringify(event.body));
          console.log(file);
          this.newProduct.image = file.split('\\')[2];
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

