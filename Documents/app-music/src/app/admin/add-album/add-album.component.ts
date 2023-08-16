import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, Validator, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/animation.module';
import { AlbumService } from '../../album.service';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css'],
  animations: [fadeInAnimation]
})

export class AddAlbumComponent implements OnInit {
  albumForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aS: AlbumService,
    private router: Router) { }



  ngOnInit(): void {
    this.albumForm = this.fb.group({
      name: ["", [
        Validators.required,
        Validators.minLength(5)
      ]],
      title: ["", [
        Validators.required
      ]],
      ref: ["", [
        Validators.required,
        Validators.pattern("\\w{5}"), //Doit avoir 5 caractères
        // Validators.pattern("[A-Z0-9]{5}")
      ]],
      duration: ["", [
        Validators.required,
        Validators.pattern("[0-9]*"), // Doit avoir une suite de chiffres
        Validators.max(900)
      ]],
      description: ["", [
        Validators.required,
      ]],
      // tags: new FormArray ([
      //   new FormControl("")
      // ]),
      tags: this.fb.array([
        this.fb.control("")
      ]),
      status: "off"
    });
  }

  get name() { return this.albumForm.get("name") };
  get title() { return this.albumForm.get("title") };
  get ref() { return this.albumForm.get("ref") };
  get duration() { return this.albumForm.get("duration") };
  get description() { return this.albumForm.get("description") };
  get tags() { return this.albumForm.get("tags") as FormArray };


  onSubmit(): void {
    console.log(this.albumForm.value);
    this.router.navigate(
      ["/admin"],
      { queryParams: { message: "Album ajouté avec succès !", model: "text-divinci-002-render-sha" } }
      )
  }


  addTags(): void {
    this.tags.push(this.fb.control(""))
  }

}