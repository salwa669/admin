import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   private httpHeaders;

  constructor(private httpClient: HttpClient) 
  {
    this.httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json' ,})
  }

   }
   private  catList :ICategory []=[]; 



  getAllCategories () :Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.APIBaseUrl}Category`)
  }

  getCategoryById(catId :number): Observable<ICategory>
  {
    return this.httpClient.get<ICategory>(`${environment.APIBaseUrl}Category/id${catId}`);

  } 
  addNewCategory(cat :ICategory):Observable<ICategory>
  {
    return this.httpClient.post<ICategory>(`${environment.APIBaseUrl}Category`, JSON.stringify(cat),this.httpHeaders);
  }

  editCategory(catId :number, cat :ICategory):Observable<ICategory>///$
  {
    return this.httpClient.put<ICategory>(`${environment.APIBaseUrl}Category/${catId}`,JSON.stringify(cat));
  }
  deleteCategory(catId :number):Observable<ICategory>
  {
    return this.httpClient.delete<ICategory>(`${environment.APIBaseUrl}Category/${catId}`)

  }
}
