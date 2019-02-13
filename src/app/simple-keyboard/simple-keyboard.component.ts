import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard                                        from 'simple-keyboard';

@Component({
    selector: 'app-simple-keyboard',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './simple-keyboard.component.html',
    styleUrls: ['./simple-keyboard.component.css']
})
export class SimpleKeyboardComponent implements AfterViewInit {
    keyboard: Keyboard;

    @Input() keyboardClassName;

    ngAfterViewInit() {
        this.keyboard = new Keyboard(`.${ this.keyboardClassName }`, {});
    }
}
