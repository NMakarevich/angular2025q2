import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';

enum COLORS {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  BLUE = 'blue',
}

const [WEEK, MONTH, HALF_OF_YEAR] = [7, 30, 180];

@Directive({
  standalone: true,
  selector: '[appColorizeByDate]',
})
export class ColorizeByDateDirective implements OnInit {
  private el = inject(ElementRef);

  appColorizeByDate = input('');

  attribute = input<'border' | 'backgroundColor'>('border');

  ngOnInit() {
    const time = new Date(this.appColorizeByDate()).getTime() / 1000;
    const currentTime = Date.now() / 1000;

    const publishedAgo = (currentTime - time) / (60 * 60 * 24);

    const color =
      publishedAgo > HALF_OF_YEAR
        ? COLORS.RED
        : publishedAgo > MONTH
          ? COLORS.YELLOW
          : publishedAgo > WEEK
            ? COLORS.GREEN
            : COLORS.BLUE;

    if (this.attribute() === 'border')
      this.el.nativeElement.style.borderBottom = `5px solid ${color}`;
    else this.el.nativeElement.style.backgroundColor = color;
  }
}
