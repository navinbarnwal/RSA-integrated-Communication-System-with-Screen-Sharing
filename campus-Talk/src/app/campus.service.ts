import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Userdetail } from '../user.model';

@Injectable({
  providedIn: 'root'
})

export class CampusService {

  constructor(private http: HttpClient) { }

  display(): Observable<Userdetail[]> {
    return this.http.get<Userdetail[]>('/api/display');
  }

  addUser(user: Userdetail): Observable<Userdetail> {
    console.log(user, 'from service');
    return this.http.post<Userdetail>('/api/addUser', user);
  }

  deleteUser(macAddress: string): Observable<{}> {
    const url = `api/task/${macAddress}`;
    return this.http.delete(url);
  }

  updateUser(user: Userdetail): Observable<{}> {
    const url = `/api/userUpdate/${user.macAddress}`;
    return this.http.put<Userdetail>(url, user);
  }

}
