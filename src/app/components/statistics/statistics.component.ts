import { Component, input } from '@angular/core';
import { Statistics } from '../../interfaces/response-item';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-statistics',
  imports: [MatIconModule],
  templateUrl: './statistics.component.html',
  standalone: true,
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  statistics = input<Statistics>();
}
