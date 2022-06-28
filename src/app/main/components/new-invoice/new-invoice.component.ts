import { Component } from '@angular/core';
import { BehaviorSubject, map, reduce } from 'rxjs';
import { ItemInterface } from 'src/app/types/item.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main-new-invoice',
  templateUrl: './new-invoice.component.html',
})
export class NewInvoiceComponent {
  items$ = new BehaviorSubject<ItemInterface[]>([]);
  senderStreet: string = '';
  senderCity: string = ' ';
  senderPostCode: string = ' ';
  senderCountry: string = ' ';

  clientStreet: string = ' ';
  clientCity: string = ' ';
  clientPostcode: string = ' ';
  clientCountry: string = ' ';

  paymentDue: string = ' ';
  description: string = ' ';
  paymentTerms: number;
  clientName: string = ' ';
  clientEmail: string = ' ';
  status: string = ' ';

  constructor(private mainService: MainService) {}

  addItem(): void {
    const newItem = {
      name: '',
      quantity: 0,
      price: 0,
      total: 0,
    };
    const updatedItems = [...this.items$.getValue(), newItem];
    this.items$.next(updatedItems);
  }

  updateItem(name: string, price: number, qty: number, total: number) {
    const updatedItems = this.items$.getValue();
    let index = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      if (updatedItems[i].name === name) {
        index = i;
        break;
      }
    }
    const newItem = {
      name,
      quantity: qty,
      price,
      total,
    };
    updatedItems.splice(index, 1, newItem);
    this.items$.next(updatedItems);
  }

  deleteItem(name: string): void {
    const updatedItems = this.items$.getValue();
    let index = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      if (updatedItems[i].name === name) {
        index = i;
        break;
      }
    }
    updatedItems.splice(index, 1);
    this.items$.next(updatedItems);
  }

  addInvoice(): void {
    const today = new Date().toISOString().slice(0, 9);
    let total = this.items$
      .getValue()
      .reduce((acc, item) => acc + item.total, 0);
    let newInvoice = {
      id: Date.now().toString().slice(0, 6),
      createdAt: today,
      paymentDue: this.paymentDue,
      description: this.description,
      paymentTerms: this.paymentTerms,
      clientName: this.clientName,
      clientEmail: this.clientEmail,
      status: this.status,
      senderAddress: {
        street: this.senderStreet,
        city: this.senderCity,
        postCode: this.senderPostCode,
        country: this.senderCountry,
      },
      clientAddress: {
        street: this.clientStreet,
        city: this.clientCity,
        postCode: this.clientPostcode,
        country: this.clientCountry,
      },
      items: this.items$.getValue(),
      total,
    };
    this.mainService.addInvoice(newInvoice);
  }
}
