import { ItemInterface } from './item.interface';

export interface InvoiceInterface {
  id: string;
  clientName: string;
  clientEmail: string;
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  createdAt: string;
  paymentDue: string;
  paymentTerms: number;
  description: string;
  status: string;
  items: ItemInterface[];
  total: number;
}
