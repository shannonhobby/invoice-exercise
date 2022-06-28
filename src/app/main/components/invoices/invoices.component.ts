import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceInterface } from 'src/app/types/invoice.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main-invoices',
  templateUrl: './invoices.component.html',
})
export class InvoicesComponent {
  invoices$: Observable<InvoiceInterface[]>;
  invoicesLength: number;

  constructor(private mainService: MainService) {
    this.invoicesLength = this.mainService.invoices$.getValue().length;
    this.invoices$ = this.mainService.invoices$;
  }
}
