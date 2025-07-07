import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../interfaces/response-item';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: ResponseItem[] | undefined, filterTerm: string): ResponseItem[] | undefined {
    if (!value || !filterTerm) return value;
    return value.filter((item) =>
      item.snippet.title.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }
}
