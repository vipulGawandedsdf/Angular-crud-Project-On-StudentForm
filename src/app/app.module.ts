import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudmoduleModule } from './crud/crudmodule/crudmodule.module';
import { StudentFormComponent } from './crud/module/student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CrudmoduleModule,
    CrudmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
