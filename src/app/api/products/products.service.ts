import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StorageService } from 'src/app/shared/services/storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  public getAll (): Observable<any> {
    const url = `${environment.urlAPI}/products`;
    return this.httpClient.get(url);
  }

  public getProductById(id): Observable<any> {
    const url = `${environment.urlAPI}/products/${id}`;

    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' +  this.storageService.get('token')})
    };
    return this.httpClient.get(url, httpOptions);
  }

  public getByCategory(categoryId: number): Observable<any> {
    const url = `${environment.urlAPI}/products`;
    const options = {
      params: new HttpParams().set('category', `${categoryId}`)
    }

    return this.httpClient.get(url, options);
  }

  public async orderProduct(order): Promise<Observable<any>> {
    const url = `${environment.urlAPI}/orders`;

    const token = await this.storageService.get('token');
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' +  token})
    };
    return this.httpClient.post(url, order, httpOptions);
  }
}