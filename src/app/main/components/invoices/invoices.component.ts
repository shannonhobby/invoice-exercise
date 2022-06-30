import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceInterface } from 'src/app/types/invoice.interface';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-invoices',
  templateUrl: './invoices.component.html',
})
export class InvoicesComponent {
  invoices$: Observable<InvoiceInterface[]>;
  invoicesLength: number;

  constructor(private mainService: MainService, private router: Router) {
    this.invoicesLength = this.mainService.invoices$.getValue().length;
    this.invoices$ = this.mainService.invoices$;
  }

  navigateToInvoice(id: string): void {
    this.router.navigateByUrl(`/${id}`);
  }
}
