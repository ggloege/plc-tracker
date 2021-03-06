import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ExperimentFormComponent } from './experiment-form/experiment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ExperimentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
