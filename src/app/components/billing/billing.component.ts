import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faHandPointLeft,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {
  router = inject(Router);
  faHandPointLeft = faHandPointLeft;

  goBack(): void {
    this.router.navigate(['/']);
  }
}
