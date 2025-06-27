import { Component, input } from '@angular/core';
import { SearchResponse } from '../../interfaces/search-response';

@Component({
  selector: 'app-results-list',
  imports: [],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.scss',
  standalone: true,
})
export class ResultsListComponent {
  searchResponse = input<SearchResponse>();
}
