import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { HelloService } from 'src/app/services/hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { catchError, of } from 'rxjs';
import { NgIf, AsyncPipe, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { CvsListComponent } from '../cvs-list/cvs-list.component';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { Btc2usdPipe } from '../../shared/pipes/btc2usd.pipe';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    imports: [NgIf, CvsListComponent, CvCardComponent, EmbaucheComponent, AsyncPipe, UpperCasePipe, CurrencyPipe, DatePipe, Btc2usdPipe]
})
export class CvComponent {
  private loggerService = inject(LoggerService);

  // On commende le cvService
  cvService = inject(CvService);
  //On le consomme
  cvs: Cv[] = [];
  // V2
  cvs$ = this.cvService.getCvs().pipe(
    catchError(
      (e) => {
        this.toastr.error(
          `Les données sont fictives, il y a un problème, merci de contacter l'admin`,
        );
        return of(this.cvService.getFakeCvs());
      }
    )
  )
  today = new Date();
  // selectedCv: Cv | null = null;

  selectedCv$ = this.cvService.selectedCv$;

  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  // helloService = new HelloService();
  private helloService = inject(HelloService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    this.helloService.sayHello();
    this.toastr.info('Bienvenu dans notre CvTech :D')
    this.loggerService.log('cc je suis le cvComponent');
    // V1
    // this.cvService.selectedCv$.subscribe({
    //   next: cv => this.selectedCv = cv
    // });

    // V1
    this.cvService.getCvs().subscribe({
      next: (cvs) => this.cvs = cvs,
      error: (e) => {
        this.toastr.error(`Les données sont fictives, il y a un problème, merci de contacter l'admin`);
        this.cvs = this.cvService.getFakeCvs()
      }
    })
  }
  // onForwardCv(cv: Cv) {
  //   this.selectedCv = cv;
  //   // for() {
  //   //   // ce que je répéte
  //   // }
  // }
}
