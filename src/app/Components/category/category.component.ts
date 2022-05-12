import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private catService: CategoryService ,
    private RefDialoge:MatDialog) { }

   public  catList :ICategory []=[]; 

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(cat =>{
      this.catList = cat
    })
  }
  OpenDialoge(){

    const dialogRef = this.RefDialoge.open(AddCategoryComponent)
     dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
 }
 confirmDialog(id:number): void {
   
  // const dialogConfig = new MatDialogConfig();
  // dialogConfig.data=id;
  // const dialogRef = this.RefDialoge.open(deleteCategory,dialogConfig );
  // dialogRef.afterClosed().subscribe(dialogResult => {
  //   this.res = dialogResult;
  // });
}

}
