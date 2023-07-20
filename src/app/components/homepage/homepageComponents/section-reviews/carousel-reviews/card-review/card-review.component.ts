import { Component, Input } from '@angular/core';
import { Review } from 'src/app/model/Review';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss'],
})
export class CardReviewComponent {
  @Input() review!: Review;
}
