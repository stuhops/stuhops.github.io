import { Component, Input } from '@angular/core';
import { BasicColors } from '../../basic-colors.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'shared-contact-me-banner',
  templateUrl: './contact-me-banner.component.html',
  styleUrls: ['./contact-me-banner.component.scss'],
})
export class ContactMeBannerComponent {
  @Input() header: string = 'Contact Stu';
  @Input() buttonText: string = 'Contact Stu';
  @Input() buttonStroke: BasicColors | null = BasicColors.accent;
  email = environment.resume.email;
}
