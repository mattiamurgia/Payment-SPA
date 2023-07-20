import { Component, inject } from '@angular/core';
import { Review } from 'src/app/model/Review';
import { InsertCardDBService } from 'src/app/services/insert-card-db.service';

@Component({
  selector: 'app-carousel-reviews',
  templateUrl: './carousel-reviews.component.html',
  styleUrls: ['./carousel-reviews.component.scss'],
})
export class CarouselReviewsComponent {
  getReviews = inject(InsertCardDBService);
  dataReviewsDB!: Review[];

  ngOnInit(): void {
    this.getReviewsUser();
  }

  getReviewsUser() {
    this.getReviews.getReview().subscribe((data) => {
      Object.values(data).map(
        (value: Review[]) => (this.dataReviewsDB = value)
      );
    });
  }
}
