import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InvoiceInterface } from 'src/app/types/invoice.interface';
import { ViewInvoiceService } from '../../services/viewInvoice.service';

@Component({
  selector: 'app-individual-invoice',
  templateUrl: './individualInvoice.component.html',
})
export class IndividualInvoiceComponent {
  invoice: InvoiceInterface;
  constructor(private viewInvoiceService: ViewInvoiceService) {
    this.invoice = this.viewInvoiceService.invoice$.getValue();
  }
}
