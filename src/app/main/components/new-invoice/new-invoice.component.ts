import { Component } from '@angular/core';
import { BehaviorSubject, map, reduce } from 'rxjs';
import { ItemInterface } from 'src/app/types/item.interface';
import { MainService } from '../../services/main.service';
import { FormControl, FormGroup } from '@angular/forms';
import { InvoiceInterface } from 'src/app/types/invoice.interface';

@Component({
  selector: 'app-main-new-invoice',
  templateUrl: './new-invoice.component.html',
})
export class NewInvoiceComponent {
  //TODO fix error handling
  // - add error handling messages at the bottom
  // - fix due date
  items$ = new BehaviorSubject<ItemInterface[]>([]);
  formData: FormGroup;
  noError: boolean = true;

  senderStreet: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;

  clientStreet: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;

  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;

  ngOnInit() {
    this.formData = new FormGroup({
      senderStreet: new FormControl(''),
      senderCity: new FormControl(' '),
      senderPostCode: new FormControl(' '),
      senderCountry: new FormControl(' '),

      clientStreet: new FormControl(' '),
      clientCity: new FormControl(' '),
      clientPostCode: new FormControl(' '),
      clientCountry: new FormControl(' '),

      createdAt: new FormControl(' '),
      paymentDue: new FormControl(' '),
      description: new FormControl(' '),
      paymentTerms: new FormControl(1),
      clientName: new FormControl(' '),
      clientEmail: new FormControl(' '),
      status: new FormControl(' '),
    });
  }
  constructor(private mainService: MainService) {}

  toggleNewInvoice(): void {
    this.mainService.closeNewInvoice();
  }
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

  showErrors(): void {
    this.noError = false;
  }

  addInvoice(result: any): void {
    const today = new Date().toISOString().slice(0, 9);
    // if (this.items$.getValue().length === 0) {
    //   this.noError = false;
    //   return;
    // }
    let total = this.items$
      .getValue()
      .reduce((acc, item) => acc + item.total, 0);
    let daysUntilDue = result.paymentDue.match(/\d+/, '\\$&');
    console.log('days until due:', daysUntilDue[0]);
    let paymentDue = new Date(result.createdAt);
    console.log('before:', paymentDue);
    paymentDue.setDate(paymentDue.getDate() + daysUntilDue[0]);
    console.log('after:', paymentDue);
    let newInvoice = {
      id: Date.now().toString().slice(6, 12),
      createdAt: result.createdAt,
      paymentDue: paymentDue.toString(),
      description: result.description,
      paymentTerms: result.paymentTerms,
      clientName: result.clientName,
      clientEmail: result.clientEmail,
      status: 'pending',
      senderAddress: {
        street: result.senderStreet,
        city: result.senderCity,
        postCode: result.senderPostCode,
        country: result.senderCountry,
      },
      clientAddress: {
        street: result.clientStreet,
        city: result.clientCity,
        postCode: result.clientPostCode,
        country: result.clientCountry,
      },
      items: this.items$.getValue(),
      total,
    };
    this.mainService.addInvoice(newInvoice);
  }
}
