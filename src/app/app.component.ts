import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchResponse } from './interfaces/search-response';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'Youtube client';

  searchResponse!: SearchResponse;

  setSearchResponse(searchResponse: SearchResponse) {
    this.searchResponse = searchResponse;
  }
}
