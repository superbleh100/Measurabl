import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonTableComponent } from './person-table/person-table.component';
import { PersonsService } from './person-table/persons.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
