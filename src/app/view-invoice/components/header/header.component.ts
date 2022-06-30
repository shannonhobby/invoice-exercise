import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceInterface } from 'src/app/types/invoice.interface';
import { ViewInvoiceService } from '../../services/viewInvoice.service';

@Component({
  selector: 'app-individual-header',
  templateUrl: './header.component.html',
})
export class IndividualHeaderComponent {
  @Input('invoice') invoiceProps: InvoiceInterface;

  constructor(private router: Router) {}
  homepage() {
    this.router.navigateByUrl(``);
  }
}
