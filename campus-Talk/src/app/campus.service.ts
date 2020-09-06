import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const baseUrl = 'http://localhost:4201/dashboard/details';
@Injectable({
  providedIn: 'root'
})

export class CampusService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }


}
