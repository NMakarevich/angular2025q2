import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchResponse } from './interfaces/search-response';
import { HeaderComponent } from './components/header/header.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { SortBy } from './interfaces/sort-by';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ResultsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'Youtube client';

  searchResponse!: SearchResponse;

  filterTerm = model<string>('');
  sortBy!: SortBy;

  setSearchResponse(searchResponse: SearchResponse) {
    this.searchResponse = searchResponse;
  }

  setSortBy(sortBy: SortBy) {
    this.sortBy = sortBy;
  }
}
