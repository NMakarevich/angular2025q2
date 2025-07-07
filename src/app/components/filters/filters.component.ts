import { Component, model, output } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SortBy } from '../../interfaces/sort-by';

@Component({
  selector: 'app-filters',
  imports: [ButtonComponent, MatIcon, MatFormFieldModule, MatInput, FormsModule],
  templateUrl: './filters.component.html',
  standalone: true,
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  sortByDate: 'asc' | 'desc' = 'desc';
  sortByViews: 'asc' | 'desc' = 'desc';

  sortBy: SortBy = {
    type: 'date',
    direction: 'asc',
  };

  filterTerm = model<string>('');

  setSortBy = output<SortBy>();

  toggleSortByViews() {
    this.sortByViews = this.sortByViews === 'desc' ? 'asc' : 'desc';
    this.sortBy.type = 'views';
    this.sortBy.direction = this.sortByViews;
    this.setSortBy.emit(this.sortBy);
  }

  toggleSortByDate() {
    this.sortByDate = this.sortByDate === 'desc' ? 'asc' : 'desc';
    this.sortBy.type = 'date';
    this.sortBy.direction = this.sortByDate;
    this.setSortBy.emit(this.sortBy);
  }
}
