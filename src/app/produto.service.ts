import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs/internal/Observable';
import { Produto } from './produto';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private Http: HttpClient) { }

  getProdutos() : Observable<Produto[]> {
    let url = "http://localhost:3000/produto";

    return this.Http.get<Produto[]>(url);
  }
}
