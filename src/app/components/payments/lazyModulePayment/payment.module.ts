import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentsComponent } from '../payments.component';
import { SupportedCardsComponent } from '../paymentComponents/supported-cards/supported-cards.component';

@NgModule({
  declarations: [PaymentsComponent, SupportedCardsComponent],
  imports: [CommonModule, PaymentRoutingModule, FontAwesomeModule],
})
export class PaymentModule {}
