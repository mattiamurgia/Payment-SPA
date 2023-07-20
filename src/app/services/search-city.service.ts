import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainCity } from '../model/City';

@Injectable({
  providedIn: 'root',
})
export class SearchCityService {
  private apiUrl = 'https://restcountries.com/v3.1/region/';

  http = inject(HttpClient);

  searchCity(region: string): Observable<MainCity[]> {
    const url = `${this.apiUrl}/${region}`;
    return this.http.get<MainCity[]>(url);
  }
}
