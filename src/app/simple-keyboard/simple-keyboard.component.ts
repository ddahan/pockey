import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard                                 from 'simple-keyboard';

@Component({
  selector: 'app-simple-keyboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './simple-keyboard.component.html',
  styleUrls: ['./simple-keyboard.component.css']
})
export class SimpleKeyboardComponent implements OnInit {
  keyboard: Keyboard;

  ngOnInit() {
    this.keyboard = new Keyboard({});
  }

}
