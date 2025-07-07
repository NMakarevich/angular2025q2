import { Component, model, output } from '@angular/core';
import { SearchResponse } from '../../interfaces/search-response';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../ui/button/button.component';
import { FormsModule } from '@angular/forms';
import { response } from '../../mock/mock';

@Component({
  selector: 'app-search-bar',
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatLabel,
    MatInputModule,
    MatLabel,
    ButtonComponent,
    FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
})
export class SearchBarComponent {
  passSearchResponse = output<SearchResponse>();

  searchTerm = model<string>('');

  search(): void {
    if (this.searchTerm()) this.passSearchResponse.emit(response);
  }
}
