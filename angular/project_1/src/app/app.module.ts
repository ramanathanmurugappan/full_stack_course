import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RamComponent } from './ram/ram.component';
import { ImageComponent } from './image/image.component';
import { FileComponent } from './file/file.component';
import { FormComponent } from './form/form.component';
import { SubmitComponent } from './submit/submit.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LodashComponent } from './lodash/lodash.component';
// import { HttpClientModule } from '@angular/common/http';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';



@NgModule({
  declarations: [
    AppComponent,
    RamComponent,
    ImageComponent,
    FileComponent,
    FormComponent,
    SubmitComponent,
    LodashComponent,
    InterpolationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TranslocoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
