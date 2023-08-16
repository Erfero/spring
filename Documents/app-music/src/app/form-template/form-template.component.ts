import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animation.module';
import { musicModel } from '../music';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
  animations: [fadeInAnimation]
})
export class FormTemplateComponent {
  submitted: boolean = false;
  name: string = ""
  auteur: string = "";
  genres = ["Jazz", "Rap", "Zouk", "AfroBeat"];
  Music = new musicModel("", "", this.genres[0])
  constructor() { }

  onSubmit(form: any) {
    this.submitted = true;
    console.log(form);
    

  }


}
