import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalData } from 'src/app/shared/constants/appConstants';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  personalData = personalData;
}
