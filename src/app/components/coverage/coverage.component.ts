import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss'],
})
export class CoverageComponent {
  router = inject(Router);
  faHandPointLeft = faHandPointLeft;

  goBack(): void {
    this.router.navigate(['/']);
  }
}
