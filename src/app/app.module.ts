import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';


import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './commInterCompo/pere/pere.component';
import { FilsComponent } from './commInterCompo/fils/fils.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { LoggerService } from './services/logger.service';
import { HelloService } from './services/hello.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/forms/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestRxjsComponent } from './rxjs/test-rxjs/test-rxjs.component';
import { AuthInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { CvModule } from './cv/cv.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoWayComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    NgStyleComponent,
    MiniWordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    NavbarComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestRxjsComponent,
  ],
  imports: [
    BrowserModule,
    CvModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // Voila ce que tu devra fournir (Notre menu)
    LoggerService,
    HelloService,
    AuthInterceptorProvider,
  ],
  // C'est le composant qu'on met dans index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
