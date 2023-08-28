import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './landing/landing.module';
import { CommonComponentsModule } from './common/common.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptorInterceptor } from './common/interceptor/apiinterceptor.interceptor';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonComponentsModule,
        LandingModule,
        MatFormFieldModule
    ],
    providers: [
        { 
            provide: HTTP_INTERCEPTORS, useClass: APIInterceptorInterceptor, multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
