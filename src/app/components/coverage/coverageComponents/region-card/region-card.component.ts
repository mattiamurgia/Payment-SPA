import { Component, Input } from '@angular/core';
import { MainCity } from 'src/app/model/City';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.scss'],
})
export class RegionCardComponent {
  @Input() regionData!: MainCity;
}
