import { Component } from '@angular/core';
import { Card } from 'src/app/model/Card';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss'],
})
export class SectionCardComponent {
  cardData: Card[] = [
    {
      img: 'https://uploads-ssl.webflow.com/635e20f77318521304947d8d/635e79f9708045d44d4eb5a8_Billing.svg',
      title: 'Fatturazione',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
      route: '/billing',
    },
    {
      img: 'https://uploads-ssl.webflow.com/635e20f77318521304947d8d/635e79f96c0ae0264b633589_Invoice.svg',
      title: 'Copertura',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
      route: '/coverage',
    },
    {
      img: 'https://uploads-ssl.webflow.com/635e20f77318521304947d8d/635e79f9bc9d9c4f4de8dab6_Payment.svg',
      title: 'Pagamenti',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
      route: '/payment',
    },
  ];
}
