import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ItemComponent } from './components/item/item.component';
import { MainComponent } from './components/main/main.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainService } from './services/main.service';
const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    InvoicesComponent,
    NewInvoiceComponent,
    InvoiceComponent,
    ItemComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MainService],
  bootstrap: [],
})
export class MainModule {}
