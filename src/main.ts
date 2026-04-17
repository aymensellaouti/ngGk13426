import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { LoggerService } from './app/services/logger.service';
import { HelloService } from './app/services/hello.service';
import { AuthInterceptorProvider } from './app/auth/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, ToastrModule.forRoot(), ReactiveFormsModule),
        // Voila ce que tu devra fournir (Notre menu)
        LoggerService,
        HelloService,
        AuthInterceptorProvider,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
