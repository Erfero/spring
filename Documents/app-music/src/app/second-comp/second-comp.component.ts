import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent {
  public enteredText: string = " ";
  @Input() send: string | undefined;
  constructor( 
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.testService.dataEmitter.subscribe((data) => {
      this.enteredText = data;
    });
  }
}
