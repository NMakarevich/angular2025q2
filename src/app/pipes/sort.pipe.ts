import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../interfaces/response-item';
import { SortBy } from '../interfaces/sort-by';

enum sortDirection {
  'asc' = 1,
  'desc' = -1,
}

@Pipe({
  standalone: true,
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(
    value: ResponseItem[] | undefined,
    sorting: SortBy | undefined
  ): ResponseItem[] | undefined {
    if (!value || !sorting) return value;
    return sorting.type === 'date'
      ? value.sort(
          (a, b) =>
            (new Date(a.snippet.publishedAt).getTime() -
              new Date(b.snippet.publishedAt).getTime()) *
            sortDirection[sorting.direction]
        )
      : value.sort(
          (a, b) =>
            (Number(a.statistics.viewCount) - Number(b.statistics.viewCount)) *
            sortDirection[sorting.direction]
        );
  }
}
