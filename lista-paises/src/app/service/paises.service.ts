import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constantes } from 'src/utils/Constantes';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]>{
    return this.http.get<any>(Constantes.URL_ALL_PAISES);
  }
  getPais(nomePais: string): Observable<any[]>{
    return this.http.get<any[]>(Constantes.URL_ALL_PAIS + `${nomePais}?fullText=true`);
  }
}
