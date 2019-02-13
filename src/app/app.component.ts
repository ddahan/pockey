import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    keyboard1ClassName: string;
    keyboard2ClassName: string;

    constructor() {
        this.keyboard1ClassName = 'keyboard1';
        this.keyboard2ClassName = 'keyboard2';
    }

}
