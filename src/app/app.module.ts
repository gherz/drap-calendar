import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { AppComponent } from './app.component';
import { CalendarHeaderComponent } from './calendar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ],
  exports: [CalendarHeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
