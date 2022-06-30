import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from '../main/main.module';
import { MainService } from '../main/services/main.service';
import { IndividualBodyComponent } from './components/body/body.component';
import { IndividualHeaderComponent } from './components/header/header.component';
import { IndividualInvoiceComponent } from './components/Individual-Invoice/individualInvoice.component';
import { IndividualSidebarComponent } from './components/sidebar/sidebar.component';
import { ViewInvoiceService } from './services/viewInvoice.service';

const routes: Routes = [{ path: ':id', component: IndividualInvoiceComponent }];

@NgModule({
  declarations: [
    IndividualInvoiceComponent,
    IndividualSidebarComponent,
    IndividualBodyComponent,
    IndividualHeaderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainModule,
  ],
  providers: [ViewInvoiceService, MainService],
  bootstrap: [],
})
export class ViewInvoiceModule {}
