import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit{
   produto : Produto [] = []

   constructor (private produtoService : ProdutoService){}


   ngOnInit(): void {
    this.loadProduto();
  }

  loadProduto(){
    this.produtoService.getProdutos().subscribe({
      next: data => this.produto = data,
      error: msg => console.log ("erro adipoint" + msg)

    })
  }

}
