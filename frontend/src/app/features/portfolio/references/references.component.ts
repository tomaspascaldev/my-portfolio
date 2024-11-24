import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { references } from 'src/app/shared/constants/appConstants';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  firstReference = references[0];
  references = references.slice(1);
}
