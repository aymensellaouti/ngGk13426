import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { catchError, EMPTY } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth/services/auth.service";
import { AsyncPipe } from "@angular/common";
import { DefaultImagePipe } from "../pipes/default-image.pipe";

@Component({
    selector: 'app-details-cv',
    templateUrl: './details-cv.component.html',
    styleUrls: ['./details-cv.component.css'],
    imports: [AsyncPipe, DefaultImagePipe]
})
export class DetailsCvComponent {
  //cv: Cv | null = null;
  cvService = inject(CvService);
  authService = inject(AuthService);
  acr = inject(ActivatedRoute);
  //V2
  cv$ = this.cvService.getCvById(this.acr.snapshot.params['id']).pipe(
    catchError(
      e => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      }
    )
  );
  router = inject(Router);
  toastr = inject(ToastrService);
  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // // this.cv = this.cvService.findCvById(id);
    // this.cvService.getCvById(id).subscribe({
    //   next: cv => this.cv = cv,
    //   error: e => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   }
    // })
    // if (!this.cv) {
    //    this.router.navigate([APP_ROUTES.cv]);
    // }
  }

  delete(cv: Cv) {
      this.cvService.deleteCvById(cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toastr.error('problème !!!!!');
          console.log(e);
        }
      });
  }
}
