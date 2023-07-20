import {
  Component,
  OnInit,
  inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CardPrice } from 'src/app/model/CardPrice';
import { DataCardPriceService } from 'src/app/services/data-card-price.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-section-billing',
  templateUrl: './section-billing.component.html',
  styleUrls: ['./section-billing.component.scss'],
})
export class SectionBillingComponent implements OnInit {
  switchStatus: boolean = false;
  dataPrice!: any;
  isLoading = true;
  hiddenButton = false;
  serviceData = inject(DataCardPriceService);
  
  @ViewChild('loader') loaderRef!: ElementRef;

  ngOnInit() {
    this.getLoadData('Month');
  }

  getLoadData(type: 'Month' | 'Year') {
    this.serviceData
      .getDataCard('cardPrices' + `${type}`)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        Object.values(data).map(
          (value) => (this.dataPrice = value as CardPrice)
        );
      });
    this.loaderRef.nativeElement.style.display = 'none';
  }

  switchState() {
    this.dataPrice = this.getLoadData(
      `${this.switchStatus ? 'Year' : 'Month'}`
    );
  }
}
