import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { personalData } from 'src/app/shared/constants/appConstants';
import { EmailService } from 'src/app/shared/services/EmailService';
import { SendEmail } from 'src/app/shared/models/email.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private emailService = inject(EmailService);
  personalData = personalData;
  model = new SendEmail('', '', '', '');

  onSubmit(f: NgForm) {
    this.emailService.sendEmail(this.model)
    .subscribe(data => {
      console.log(data);
      if(data === 'OK'){
        alert('Email sent');
      }
    });
    f.resetForm();
  }
}
