import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, NgForm, NgModel } from "@angular/forms";
import { TestService } from "../test.service";

@Component({
    selector: "app-first-comp",
    templateUrl: "./first-comp.component.html",
    styleUrls: ["./first-comp.component.css"],
})
export class FirstCompComponent {
    constructor(
        private testService: TestService

    ) { }

    @Output() emitter: EventEmitter<string> = new EventEmitter()
    texte = new FormControl("");

    onButtonClick(form: NgForm) {
        const imputText = form.value["texte"];
        this.testService.sendData(imputText)

    }
}