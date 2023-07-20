import { Component, OnInit, inject } from '@angular/core';
import { SearchCityService } from 'src/app/services/search-city.service';
import { MainCity } from 'src/app/model/City';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Validators, FormBuilder } from '@angular/forms';
import { Continent } from 'src/app/model/typeContinent';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  getCity = inject(SearchCityService);
  formBuilder = inject(FormBuilder);
  continent!: Continent;
  result!: MainCity[];
  error!: boolean;
  faMagnifyingGlass = faMagnifyingGlass;

  form = this.formBuilder.group({
    continent: ['', Validators.required],
  });

  searchOnChangeCity(continent: Continent) {
    if (this.continent === continent) {
      this.getCity.searchCity(this.continent).subscribe(
        (data: MainCity[]) => {
          const elementData = data.map((el: MainCity) => el).slice(0, 20);
          this.error = false;
          this.result = elementData;
        },
        (error: any) => {
          this.error = true;
          this.result = [];
        }
      );
    }
  }

  ngOnInit() {}
}
