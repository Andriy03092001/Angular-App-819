import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './Events/Events.component';
import { EventListComponent } from "./Events/event-list/event-list.component"
import { AddEventComponent } from './Events/add-event/add-event.component';
import { EventItemComponent } from './Events/event-list/event-item/event-item.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventListComponent,
    AddEventComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
