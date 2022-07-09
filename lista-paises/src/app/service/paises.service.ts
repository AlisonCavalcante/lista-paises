import { Pais } from './../shared/models/Pais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constantes } from 'src/utils/Constantes';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(Constantes.URL_ALL_PAISES);
  }
  getPais(nomePais: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(Constantes.URL_PAIS + `${nomePais}?fullText=true`);
  }
  getPaisesByCode(codes: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(Constantes.URL_PAIS_BY_CODE+`${codes}`);
  }
}
