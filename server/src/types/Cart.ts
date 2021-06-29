export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
}

export enum Currency {
  PLN = 'PLN',
  USD = 'USD',
  EUR = 'EUR',
}

export interface CartData {
  products: string[];
  address: Address;
  currency: Currency;
}
