import { Component, OnInit } from '@angular/core';
import { CarrinhoDeComprasService } from 'app/detalhe-restaurant/carrinho-de-compras/carrinho-de-compras.service';

@Component({
  selector: 'mt-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html'
})
export class CarrinhoDeComprasComponent implements OnInit {

  constructor(private compraService: CarrinhoDeComprasService) { }

  ngOnInit() {
  }

  itens(): any[]{
    return this.compraService.itens
  }

  total():number {
    return this.compraService.total()
  }

  removeItem(item: any){
    this.compraService.removeItem(item)
  }

  addItem(item: any){
    this.compraService.addItem(item)
  }
}
