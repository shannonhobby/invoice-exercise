import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  //TODO: fix number of invoices in header
  // Doesn't update when new invoice is added right now
  invoicesLength: number;
  constructor(private mainService: MainService) {
    this.invoicesLength = this.mainService.invoices$.getValue().length;
  }

  addInvoice(): void {
    this.mainService.toggleNewInvoice();
  }
}
