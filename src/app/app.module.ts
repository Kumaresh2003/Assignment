import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import { WorkComponent } from './work/work.component';
import { ClientComponent } from './client/client.component';
import { FeatureComponent } from './feature/feature.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    ClientComponent,
    FeatureComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
