import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitPipe } from '../split.pipe';
import { workExperience } from 'src/app/shared/constants/appConstants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SplitPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  workExperience = workExperience;
}
