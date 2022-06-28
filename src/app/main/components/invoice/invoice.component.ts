import { Component, Input } from '@angular/core';

import { InvoiceInterface } from 'src/app/types/invoice.interface';

@Component({
  selector: 'app-main-invoice',
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent {
  @Input('invoice') invoiceProps: InvoiceInterface;
}
