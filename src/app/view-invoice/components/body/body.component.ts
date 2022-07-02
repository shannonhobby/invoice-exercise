import { Component, Input } from '@angular/core';
import { InvoiceInterface } from 'src/app/types/invoice.interface';

@Component({
  selector: 'app-individual-body',
  templateUrl: './body.component.html',
})
export class IndividualBodyComponent {
  @Input('invoice') invoiceProps: InvoiceInterface;

}
