import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-auth',
  imports: [ButtonComponent],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
