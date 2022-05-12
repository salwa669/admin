import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpHeaders;

  constructor(private httpClient: HttpClient) 
  {
    this.httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json' ,})
  }

   }
   private productList :IProduct []=[];
   getAllProducts():Observable<IProduct[]> 
   {
      return this.httpClient.get<IProduct[]>(`${environment.APIBaseUrl}Product`);
    
   }
   getProductByCategory(catId: number): Observable<IProduct[]> 
    {
      if (catId== 0) {
      return this.httpClient.get<IProduct[]>(`${environment.APIBaseUrl}Product`);
   }
   else {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseUrl}Product/categoryId${catId}`);

   }
  }

  getProductById(prdId :number): Observable<IProduct>
  {
   // return this.httpClient.get<IProduct>(`${environment.APIBaseUrl}Product/${prdId}`);
   return this.httpClient.get<IProduct>(`${environment.APIBaseUrl}Product/${prdId}`);
  } 

  addNewProduct(product :IProduct):Observable<IProduct>
  {
    return this.httpClient.post<IProduct>
    (`${environment.APIBaseUrl}Product`, JSON.stringify(product),this.httpHeaders);
  }

  editProduct(prdId :number, product :IProduct):Observable<IProduct>
  {
    return this.httpClient.put<IProduct>
    (`${environment.APIBaseUrl}Product/${prdId}`,JSON.stringify(product),this.httpHeaders);
  }
  deleteProduct(prdId :number):Observable<IProduct>
  {
    
      return this.httpClient.delete<IProduct>(`${environment.APIBaseUrl}Product/${prdId}`);

    //return this.httpClient.delete<IProduct>(`${environment.APIBaseUrl}Product?id=${prdId}`);
  }
  
}
