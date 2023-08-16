import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-form-reactif',
  templateUrl: './form-reactif.component.html',
  styleUrls: ['./form-reactif.component.css'],
  animations: [fadeInAnimation]
})
export class FormReactifComponent {
  // genres = ["Jazz", "Rap", "Zouk", "AfroBeat"];
  // musicForm = new FormGroup({
  //   name: new FormControl(""), // new FormControl("", Validators.required)
  //   auteur: new FormControl,
  //   style: new FormControl(this.genres[0])
  // })

  // search = new FormControl;
  

  // onSubmit() {
  //   console.warn(this.musicForm.value);
    
  // }

  constructor(private fb: FormBuilder) {}


  genres = ["Jazz", "Rap", "Zouk", "AfroBeat"];
  musicForm = this.fb.group({
    name: ["",[ Validators.required, Validators.minLength(4)]], 
    auteur: ["", Validators.required],
    style: [this.genres[0]]
  });

  get name() {return this.musicForm.get("name");}
  get auteur() {return this.musicForm.get("auteur");}
  get style() {return this.musicForm.get("style");}


  search = new FormControl;


  onSubmit() {
    console.warn(this.musicForm.value);
    
  }

}
