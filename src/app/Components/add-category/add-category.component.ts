import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {


 
  
 
 public catForm !: FormGroup;

  constructor(private formBuilder:FormBuilder
    , private catService:CategoryService,
    private router :Router,
    private http: HttpClient , 
    private activatedRoute :ActivatedRoute

    ) { }
  
getCatId :number = 0;
newCat :ICategory={} as ICategory

  ngOnInit(): void {
    this.getCatId=Number(this.activatedRoute.snapshot.paramMap.get("cid"));

   
/////get category

  


    this.catForm=this.formBuilder.group({

      id:['',Validators.required]

      ,name: ['', Validators.required],
  

    })
  }
  addCategory(){
    this.getCatId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    

  
    this.newCat.name=this.catForm.value.name;

       console.log(this.newCat)
      this.catService.addNewCategory(this.newCat).subscribe(cat=>{
        this.router.navigate(['/Category']);
      });
  
   }
    
    
  

}
