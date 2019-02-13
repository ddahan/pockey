import { AfterViewInit, Component, Input, ViewEncapsulation } from '@angular/core';
import Keyboard                                               from 'simple-keyboard';

@Component({
    selector: 'app-simple-keyboard',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './simple-keyboard.component.html',
    styleUrls: ['./simple-keyboard.component.css']
})
export class SimpleKeyboardComponent implements AfterViewInit {
    keyboard: Keyboard;

    @Input() keyboardClassName = 'simple-keyboard'; // mandatory to edit use many keyboards in a same component

    ngAfterViewInit() {
        this.keyboard = new Keyboard(`.${ this.keyboardClassName }`,
            {theme: 'simple-keyboard hg-theme-default hg-layout-default',});
    }
}
