import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MainComponent } from 'src/app/main/components/main/main.component';
import { MainService } from 'src/app/main/services/main.service';
import { InvoiceInterface } from 'src/app/types/invoice.interface';

@Injectable()
export class ViewInvoiceService {
  public id: string = '';
  invoice$ = new BehaviorSubject<InvoiceInterface>({
    id: '',
    createdAt: '',
    paymentDue: '',
    description: '',
    paymentTerms: 1,
    clientName: '',
    clientEmail: '',
    status: 'pending',
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [],
    total: 1,
  });
  constructor(private mainService: MainService, private router: Router) {
    let href = this.router.url;
    this.id = href.slice(1);
    let invoices = this.mainService.invoices$.getValue();
    for (let i = 0; i < invoices.length; i++) {
      if (invoices[i].id === this.id) {
        this.invoice$.next(invoices[i]);
        break;
      }
    }
    // TODO ERROR PAGE
  }
}
