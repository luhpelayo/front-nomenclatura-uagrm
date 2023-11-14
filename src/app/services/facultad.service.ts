import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facultad } from '../interfaces/facultad';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/v1/facultad/';

  constructor(private http: HttpClient) { }

  getFacultads(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getFacultad(id: number): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteFacultad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addFacultad(Facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(`${this.myAppUrl}${this.myApiUrl}`, Facultad);
  }

  updateFacultad(id: number, Facultad: Facultad): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, Facultad);
  }
}
