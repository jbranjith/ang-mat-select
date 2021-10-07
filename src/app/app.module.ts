import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';

@NgModule({
  imports: [BrowserModule, FormsModule, MatFormFieldModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule],
})
export class AppModule {}
