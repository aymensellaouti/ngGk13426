import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { HelloService } from 'src/app/services/hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  // On commende le cvService
  cvService = inject(CvService);
  //On le consomme
  cvs: Cv[] = this.cvService.getCvs();
  today = new Date();
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  // helloService = new HelloService();
  private helloService = inject(HelloService);
  constructor(private loggerService: LoggerService) {
    this.helloService.sayHello();
    this.toastr.info('Bienvenu dans notre CvTech :D')
    this.loggerService.log('cc je suis le cvComponent');
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    // for() {
    //   // ce que je répéte
    // }
  }
}
