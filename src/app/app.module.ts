import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleKeyboardComponent } from './simple-keyboard/simple-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleKeyboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
