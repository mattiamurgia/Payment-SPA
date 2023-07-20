import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { paymentCard } from 'src/app/model/typePayment';
import { InsertCardDBService } from 'src/app/services/insert-card-db.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  router = inject(Router);
  faHandPointLeft = faHandPointLeft;
  dataCardsDB!: paymentCard[];
  insertDB = inject(InsertCardDBService);

  ngOnInit(): void {
    this.getCardsDB();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getCardsDB() {
    this.insertDB.getCardPayment().subscribe((data) => {
      Object.values(data).map(
        (value) => (this.dataCardsDB = value as paymentCard[])
      );
    });
  }
}
