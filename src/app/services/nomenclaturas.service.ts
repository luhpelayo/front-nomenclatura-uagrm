import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Nomenclatura } from '../interfaces/nomenclatura';




import { FacultadService } from './facultad.service';

@Injectable({
  providedIn: 'root'
})
export class NomenclaturasService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrlSearch: string = 'api/v1/titulos/';
  private myApiUrl: string = 'api/v1/nomenclatura/';
  constructor(private http: HttpClient, private facultadService: FacultadService) { }

  getNomenclaturas(): Observable<Nomenclatura[]> {
    return this.http.get<Nomenclatura[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

 /* getNomenclatura(id: number): Observable<Nomenclatura> {
    return this.http.get<Nomenclatura>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }  */

getNomenclatura(id: number): Observable<Nomenclatura> {
  return this.http.get<Nomenclatura>(`${this.myAppUrl}${this.myApiUrl}${id}`).pipe(
    mergeMap(nomenclatura => {
      const facultad$ = this.facultadService.getFacultad(nomenclatura.facultad);
      return forkJoin([of(nomenclatura), facultad$]);
    }),
    map(([nomenclatura, facultad]) => {
      return { ...nomenclatura, nombreFacultad: facultad.nombre };
    })
  );
}


  deleteNomenclatura(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addNomenclatura(Nomenclatura: Nomenclatura): Observable<Nomenclatura> {
    return this.http.post<Nomenclatura>(`${this.myAppUrl}${this.myApiUrl}`, Nomenclatura);
  }

  updateNomenclatura(id: number, Nomenclatura: Nomenclatura): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, Nomenclatura);
  }

  searchNomenclaturas(query: string): Observable<Nomenclatura[]> {
    return this.http.get<Nomenclatura[]>(`${this.myAppUrl}${this.myApiUrlSearch}?search=${query}`);
  }
}
