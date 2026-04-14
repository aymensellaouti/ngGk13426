import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './commInterCompo/pere/pere.component';
import { FilsComponent } from './commInterCompo/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvsListComponent } from './cv/cvs-list/cvs-list.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { HelloService } from './services/hello.service';

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
    CvComponent,
    CvsListComponent,
    CvItemComponent,
    CvCardComponent,
    NgStyleComponent,
    MiniWordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // Voila ce que tu devra fournir (Notre menu)
    LoggerService,
    HelloService
  ],
  // C'est le composant qu'on met dans index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
