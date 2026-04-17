import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { APP_ROUTES } from '../config/app-routes.config';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';

export const cvRoutes = [
  { path: APP_ROUTES.cv, component: CvComponent },
  {
    path: 'cv/add',
    component: AddCvComponent,
    canActivate: [
      // On mets les guards de cette route
      authGuard,
    ],
  },
  { path: 'cv/:id', component: DetailsCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cvRoutes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
