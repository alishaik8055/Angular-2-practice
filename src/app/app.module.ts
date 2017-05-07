import { NgModule }      from '@angular/core';

import { BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
//import{BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {InputsOutputsComponent} from './InputsOutpts.component';

import {AlertModule} from 'ng2-bootstrap';
import{HttpModule} from "@angular/http";
import { RouterModule } from '@angular/router';
import{AppRoutingModule} from "./app-routing.module";
import{routingComponents} from "./app-routing.module";
import { routing } from "./app-routing.module";
@NgModule({
  imports:[BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    routing,],
  declarations: [ AppComponent,InputsOutputsComponent,routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
