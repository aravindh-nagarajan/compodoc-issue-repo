import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ModuleOne } from './module-1/index';
import { ModuleTwo } from './module-2/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleOne,
    ModuleTwo,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
