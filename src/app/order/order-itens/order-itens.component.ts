import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCarrinho } from 'app/detalhe-restaurant/carrinho-de-compras/item-carrinho.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() itens: ItemCarrinho[]
  @Output() increase: EventEmitter<ItemCarrinho> = new EventEmitter();
  @Output() decrease: EventEmitter<ItemCarrinho> = new EventEmitter();
  @Output() remove: EventEmitter<ItemCarrinho> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitIncrease(item: ItemCarrinho) {
      this.increase.emit(item)
    }

  emitDecrease(item: ItemCarrinho) {
      this.decrease.emit(item)
    }
  emitRemove(item: ItemCarrinho) {
      this.remove.emit(item)
    }
}
