import { Component, input } from '@angular/core';
import { SearchResponse } from '../../interfaces/search-response';
import { SortBy } from '../../interfaces/sort-by';
import { SortPipe } from '../../pipes/sort.pipe';
import { ResultsItemComponent } from '../results-item/results-item.component';
import { ColorizeByDateDirective } from '../../directives/colorize-by-date.directive';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-results-list',
  imports: [SortPipe, ResultsItemComponent, ColorizeByDateDirective, FilterPipe],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.scss',
  standalone: true,
})
export class ResultsListComponent {
  searchResponse = input<SearchResponse>();
  filterTerm = input('');
  sortBy = input<SortBy>();
}
