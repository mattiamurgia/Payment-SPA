import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CardPrice } from '../model/CardPrice';

@Injectable({
  providedIn: 'root',
})
export class DataCardPriceService {
  url = 'link-firebase';
  private http = inject(HttpClient);
  dataCardMonth: CardPrice[] = [];

  //Insert the data in the Billing cards
  insertDataCard(data: CardPrice[]) {
    return this.http.post(this.url + '/cardPricesYear.json', data);
  }

  getDataCard(value: string) {
    return this.http.get(this.url + `/${value}.json`);
  }
}
