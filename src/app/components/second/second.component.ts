import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <div class="alert alert-dark">
      Hello {{name}}
      <p>test color</p>
    </div>
  `,
  styles: [``]
})
export class SecondComponent {
  name = 'anonyme';
  blacklist = ['aymen'];
  acr = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    console.log(this.acr);
    this.name = this.acr.snapshot.params['name'];
    if (this.blacklist.includes(this.name)) {
      this.router.navigate(['']);
    }
  }
}
