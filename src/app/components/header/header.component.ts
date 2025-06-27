import { Component } from '@angular/core';
import { SearchResponse } from '../../interfaces/search-response';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  searchResponse!: SearchResponse;

  setSearchResponse(searchResponse: SearchResponse) {
    this.searchResponse = searchResponse;
  }
}
