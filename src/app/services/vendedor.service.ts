import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendedorServiceAll {
  private apiUrl = 'http://localhost:8080/v1/seller';  

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
  

  guardar(vendedor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/newSeller`, vendedor);
  }
  

  actualizar(id: number, vendedor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, vendedor);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
