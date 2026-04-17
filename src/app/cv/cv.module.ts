import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvComponent } from './cv/cv.component';
import { CvsListComponent } from './cvs-list/cvs-list.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvRoutingModule } from './cv-routing.module';
import { Btc2usdPipe } from '../pipes/btc2usd.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //Cv
    CvComponent,
    CvsListComponent,
    CvItemComponent,
    CvCardComponent,
    EmbaucheComponent,
    DetailsCvComponent,
    AddCvComponent,
    DefaultImagePipe,
    Btc2usdPipe,
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class CvModule {}
