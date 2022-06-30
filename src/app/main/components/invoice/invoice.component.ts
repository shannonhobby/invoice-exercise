import { Component, Input } from '@angular/core';

import { InvoiceInterface } from 'src/app/types/invoice.interface';
import { InvoicesComponent } from '../invoices/invoices.component';

@Component({
  selector: 'app-main-invoice',
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent {
  @Input('invoice') invoiceProps: InvoiceInterface;

  constructor(private invoices: InvoicesComponent) {}

  navigateToInvoice(id: string): void {
    this.invoices.navigateToInvoice(id);
  }
}
