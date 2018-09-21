import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './components/home/home';
import { ListItem } from './components/listItem/listItem'

@NgModule({
  declarations: [
    AppComponent, 
    Home,
    ListItem,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
