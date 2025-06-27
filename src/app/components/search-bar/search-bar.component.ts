import { Component, output } from '@angular/core';
import { SearchResponse } from '../../interfaces/search-response';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
})
export class SearchBarComponent {
  setSearchResponse = output<SearchResponse>();
}
