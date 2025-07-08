import { Component, input } from '@angular/core';
import { ResponseItem } from '../../interfaces/response-item';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../ui/button/button.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { ColorizeByDateDirective } from '../../directives/colorize-by-date.directive';

@Component({
  selector: 'app-results-item',
  imports: [
    MatCardModule,
    NgOptimizedImage,
    ButtonComponent,
    StatisticsComponent,
    ColorizeByDateDirective,
  ],
  templateUrl: './results-item.component.html',
  styleUrl: './results-item.component.scss',
  standalone: true,
})
export class ResultsItemComponent {
  responseItem = input<ResponseItem>();
  protected readonly input = input;
}
