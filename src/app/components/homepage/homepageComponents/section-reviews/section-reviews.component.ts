import { Component } from '@angular/core';
import { faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-reviews',
  templateUrl: './section-reviews.component.html',
  styleUrls: ['./section-reviews.component.scss'],
})
export class SectionReviewsComponent {
  faCircleArrowRight = faCircleRight;
  faCircleArrowLeft = faCircleLeft;
}
