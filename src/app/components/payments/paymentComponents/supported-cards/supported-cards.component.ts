import { Component, Input } from '@angular/core';
import { paymentCard } from 'src/app/model/typePayment';

@Component({
  selector: 'app-supported-cards',
  templateUrl: './supported-cards.component.html',
  styleUrls: ['./supported-cards.component.scss'],
})
export class SupportedCardsComponent {
  @Input() supportedData!: paymentCard;
  @Input() index!: any;
}
