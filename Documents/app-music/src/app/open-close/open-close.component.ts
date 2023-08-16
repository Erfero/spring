import { Component, OnInit } from '@angular/core';
import { style, transition, trigger, animate } from "@angular/animations";
import { Observable, Observer } from "rxjs";
import { fadeInAnimation } from '../animation.module';
import { getCurrencySymbol } from "@angular/common";

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [fadeInAnimation]
})
export class OpenCloseComponent {

}
