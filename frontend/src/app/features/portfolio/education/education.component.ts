import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { education } from 'src/app/shared/constants/appConstants';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education = education;
}
