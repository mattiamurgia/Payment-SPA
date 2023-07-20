import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../homepageComponents/hero-section/hero-section.component';
import { SectionCardComponent } from '../homepageComponents/section-card/section-card.component';
import AdvantagesComponent from '../homepageComponents/advantages/advantages.component';
import { SectionReviewsComponent } from '../homepageComponents/section-reviews/section-reviews.component';
import { CarouselReviewsComponent } from '../homepageComponents/section-reviews/carousel-reviews/carousel-reviews.component';
import { CardReviewComponent } from '../homepageComponents/section-reviews/carousel-reviews/card-review/card-review.component';
import { HomepageComponent } from '../homepage.component';
import { CardComponent } from '../homepageComponents/section-card/card/card.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomepageComponent,
    HeroSectionComponent,
    SectionCardComponent,
    AdvantagesComponent,
    SectionReviewsComponent,
    CarouselReviewsComponent,
    CardReviewComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class HomepageModule {}
