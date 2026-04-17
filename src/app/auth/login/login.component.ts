import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../dto/credentials.dto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [FormsModule, NgIf]
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(credentials: Credentials) {
    //const mappedForm = this.mapForm(credentials);
    this.authService.login(credentials).subscribe({
      next: (response) => {
        // rediriger vers la liste des cvs
        this.toastr.success('Bien venu dans votre espace');
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        // Todo: Afficher un message d'erreur
        this.toastr.error('Veuillez vérifier vos credentials')
      }
    });
  }
}
