import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceInterface } from 'src/app/types/invoice.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      app-main {
        display: flex;
        flex-direction: row;
      }
    `,
  ],
})
export class MainComponent {
  invoices$: Observable<InvoiceInterface[]>;
  visibleInvoices$: Observable<InvoiceInterface[]>;
  newInvoice$: Observable<boolean>;

  constructor(private mainService: MainService) {
    this.invoices$ = this.mainService.invoices$;
    this.newInvoice$ = this.mainService.newInvoice$;
  }

  closeNewInvoice(): void {
    this.mainService.closeNewInvoice();
  }
}
