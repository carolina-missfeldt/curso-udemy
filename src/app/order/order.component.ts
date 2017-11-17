import { Component, OnInit } from '@angular/core';
import { RadioOption } from './../shared/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'money'},
    {label: 'Cartão de débito', value: 'deb'},
    {label: 'Cartão de crédito', value: 'cred'},
    {label: 'Vale refeição', value: 'va'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
