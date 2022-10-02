import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { ErrorListElementComponent } from './error-list-element/error-list-element.component';
import { ErrorByAppListComponent } from './error-by-app-list/error-by-app-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorListComponent,
    ErrorListElementComponent,
    ErrorByAppListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
