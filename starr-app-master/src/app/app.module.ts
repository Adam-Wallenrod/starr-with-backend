import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UploadModule} from "./upload/upload.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RatingInputComponent } from './components/rating-input/rating-input.component'


@NgModule({
  declarations: [
    AppComponent,
    RatingInputComponent
  ],
  imports: [
    BrowserModule,
    UploadModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
