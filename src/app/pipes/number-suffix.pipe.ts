import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'numberSuffix',
})
export class NumberSuffixPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) return '0';
    return value.length > 6
      ? `${(Number(value) / 1000000).toFixed(2)}M`
      : value.length > 3
        ? `${(Number(value) / 1000).toFixed(2)}K`
        : value;
  }
}
