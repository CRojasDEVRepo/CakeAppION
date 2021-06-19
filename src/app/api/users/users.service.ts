import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public signin(data): Observable<any>{
    const url = `${environment.urlAPI}/users/login`;
    return this.httpClient.post(url,data);    
  }
}
