import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalData } from 'src/app/shared/constants/appConstants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  personalData = personalData;
}
