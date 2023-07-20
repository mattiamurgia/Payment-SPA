import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionBillingComponent } from '../billingComponents/section-billing/section-billing.component';
import { CardPriceComponent } from '../billingComponents/card-price/card-price.component';
import { AccordionFAQComponent } from '../billingComponents/accordion-faq/accordion-faq.component';
import { AccordionComponent } from '../billingComponents/accordion/accordion.component';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from '../billing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BillingComponent,
    SectionBillingComponent,
    CardPriceComponent,
    AccordionFAQComponent,
    AccordionComponent,
  ],
  imports: [CommonModule, BillingRoutingModule, FormsModule, FontAwesomeModule],
})
export class BillingModule {}
