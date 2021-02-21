import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Fact } from '../types/Fact';

type FactsRequestParams = {
  ['animal_type']: string
  amount: string
};

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }

  public getFact(id: string): Observable<any> {
    return this.http.get(`${environment.endPoint}/facts/${id}`);
  }

  public getFacts(params: FactsRequestParams): Observable<any> {
      return this.http.get(`${environment.endPoint}/facts/random`, { params });
  }

  public getUser(): Observable<any> {
    return this.http.get(`${environment.endPoint}/users/me`);
  }
}
