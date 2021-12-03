import { Component } from '@angular/core';
import { Testimonial } from './shared/models/testimonial.model';

@Component({
  selector: 'lbk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testimonials: Testimonial[] = [
    {
      src: 'assets/images/image-emily.jpg',
      comment: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadliens were always hit.',
      name: 'Emili R.',
      job: 'Marketing Director'
    },
    {
      src: 'assets/images/image-thomas.jpg',
      comment: 'Sunnyside\'s enthusiasm coupled with their keen interest in our brand\'s success made it a satisfying and enjoyable experience',
      name: 'Thomas S.',
      job: 'Chief Operating Officer'
    },
    {
      src: 'assets/images/image-jennie.jpg',
      comment: 'Incredible end result! Our sales increased over 400$ when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie f.',
      job: 'Business Owner'
    }
  ];
}
