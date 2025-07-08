import { Component, input } from '@angular/core';
import { Statistics } from '../../interfaces/response-item';
import { MatIconModule } from '@angular/material/icon';
import { NumberSuffixPipe } from '../../pipes/number-suffix.pipe';

@Component({
  selector: 'app-statistics',
  imports: [MatIconModule, NumberSuffixPipe],
  templateUrl: './statistics.component.html',
  standalone: true,
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  statistics = input<Statistics>();
}
