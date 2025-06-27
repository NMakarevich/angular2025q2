import { Component, input } from '@angular/core';
import { ResponseItem } from '../../interfaces/response-item';

@Component({
  selector: 'app-results-item',
  imports: [],
  templateUrl: './results-item.component.html',
  styleUrl: './results-item.component.scss',
  standalone: true,
})
export class ResultsItemComponent {
  responseItem = input<ResponseItem>();
}
