import { MenuItem } from './../menu-item/menu-item.model';

export class ItemCarrinho{
    constructor(public menuItem: MenuItem, public quantity = 1){}
    value(): number{
        return this.menuItem.price * this.quantity;
    }
}