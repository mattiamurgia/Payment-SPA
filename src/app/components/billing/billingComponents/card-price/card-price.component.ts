import { Component, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CardPrice } from 'src/app/model/CardPrice';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss'],
})
export class CardPriceComponent {
  faCoffee = faCoffee;

  @Input() cardPrice!: CardPrice;
}
