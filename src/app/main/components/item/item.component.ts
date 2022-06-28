import { Component, Input } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { InvoiceInterface } from 'src/app/types/invoice.interface';
import { ItemInterface } from 'src/app/types/item.interface';
import { MainService } from '../../services/main.service';
import { InvoiceComponent } from '../invoice/invoice.component';
import { NewInvoiceComponent } from '../new-invoice/new-invoice.component';

@Component({
  selector: 'app-main-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input('item') itemProps: ItemInterface;

  constructor(private newInvoiceComponent: NewInvoiceComponent) {}

  deleteItem(): void {
    this.newInvoiceComponent.deleteItem(this.itemProps.name);
  }

  updateName(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.itemProps.name = target.value;
    this.newInvoiceComponent.updateItem(
      target.value,
      this.itemProps.price,
      this.itemProps.quantity,
      this.itemProps.total
    );
  }
  updateQty(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.newInvoiceComponent.updateItem(
      this.itemProps.name,
      this.itemProps.price,
      parseInt(target.value),
      this.itemProps.price * parseInt(target.value)
    );
  }
  updatePrice(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.newInvoiceComponent.updateItem(
      this.itemProps.name,
      parseInt(target.value),
      this.itemProps.quantity,
      parseInt(target.value) * this.itemProps.quantity
    );
  }
}
