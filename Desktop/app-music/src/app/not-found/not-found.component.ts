import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [fadeInAnimation]
})
export class NotFoundComponent {

}
