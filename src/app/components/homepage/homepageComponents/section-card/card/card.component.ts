import { Component, Input, inject } from '@angular/core';
import { Card } from 'src/app/model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() dataCard!: Card;
}
