import { Pipe, PipeTransform } from '@angular/core';

const MAX_TITLE_LENGTH = 30;

@Pipe({
  name: 'shortTitle',
  standalone: true,
})
export class ShortTitlePipe implements PipeTransform {
  transform(title: string | undefined): string {
    if (!title) return '';
    return title.length < MAX_TITLE_LENGTH ? title : `${title.slice(0, MAX_TITLE_LENGTH - 3)}...`;
  }
}
