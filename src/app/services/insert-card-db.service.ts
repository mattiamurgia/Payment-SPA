import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { paymentCard } from '../model/typePayment';
import { Review } from '../model/Review';

@Injectable({
  providedIn: 'root',
})
export class InsertCardDBService {
  url = 'https://payment-spa-default-rtdb.europe-west1.firebasedatabase.app';
  private http = inject(HttpClient);
  // Insert the data description in the Card Payment
  insertCardPayment(cards: paymentCard[]) {
    return this.http.post(this.url + '/paymentCard.json', cards);
  }

  // Insert the data reviews
  insertReview(review: Review[]) {
    return this.http.post(this.url + '/reviewsUser.json', review);
  }

  // Get Payment Cards from the DB
  getCardPayment() {
    return this.http.get(this.url + '/paymentCard.json');
  }

  // Get Reviews from the DB
  getReview() {
    return this.http.get(this.url + '/reviewsUser.json');
  }
}
