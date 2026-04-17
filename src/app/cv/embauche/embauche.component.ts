import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';


@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css'],
    standalone: false
})
export class EmbaucheComponent {
  embaucheService = inject(EmbaucheService);
  public embauchees: Cv[] = this.embaucheService.getEmbauchees();

}
