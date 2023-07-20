import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoverageRoutingModule } from './coverage-routing.module';
import { CoverageComponent } from '../coverage.component';
import { SearchComponent } from '../coverageComponents/search/search.component';
import { RegionCardComponent } from '../coverageComponents/region-card/region-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoverageComponent, SearchComponent, RegionCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    CoverageRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CoverageModule {}
