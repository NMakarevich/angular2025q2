import { Component, model, output, ViewChild } from '@angular/core';
import { SearchResponse } from '../../interfaces/search-response';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FiltersComponent } from '../filters/filters.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { AuthComponent } from '../auth/auth.component';
import { ButtonComponent } from '../ui/button/button.component';
import { SortBy } from '../../interfaces/sort-by';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    SearchBarComponent,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    AuthComponent,
    FiltersComponent,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  @ViewChild(MatExpansionPanel) expansionPanel!: MatExpansionPanel;

  filterTerm = model<string>('');

  setSortBy = output<SortBy>();

  passSortBy(sortBy: SortBy) {
    this.setSortBy.emit(sortBy);
  }

  getSearchResponse(response: SearchResponse) {
    this.passSearchResponse.emit(response);
  }

  togglePanel() {
    this.expansionPanel.toggle();
  }

  passSearchResponse = output<SearchResponse>();
}
