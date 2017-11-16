import { MenuItem } from './../menu-item/menu-item.model';
import { ItemCarrinho } from './item-carrinho.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CarrinhoDeComprasService {
  itens: ItemCarrinho[] = [];
  constructor() { }

  clear(){
    this.itens = [];
  }

  addItem(item: MenuItem){
    let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
    if(foundItem){
      foundItem.quantity = foundItem.quantity + 1;
    }else{
      this.itens.push(new ItemCarrinho(item));
    }
  }

  removeItem(item: ItemCarrinho){
    this.itens.splice(this.itens.indexOf(item), 1);
  }
  total(): number {
    return this.itens
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0 )
  }
}
