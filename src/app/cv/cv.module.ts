import { NgModule } from '@angular/core';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvComponent } from './cv/cv.component';
import { CvsListComponent } from './cvs-list/cvs-list.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvRoutingModule } from './cv-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CvRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        //Cv
        CvComponent,
        CvsListComponent,
        CvItemComponent,
        CvCardComponent,
        EmbaucheComponent,
        DetailsCvComponent,
        AddCvComponent,
        DefaultImagePipe
    ],
})
export class CvModule {}
