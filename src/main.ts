import { LoggerService } from './app/services/logger.service';
import { HelloService } from './app/services/hello.service';
import { AuthInterceptorProvider } from './app/auth/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from './app/app.routes';
import { CustomPreloadingStrategy } from './app/preloading strategy/custom.preloading-strategy';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      ToastrModule.forRoot(),
      ReactiveFormsModule,
    ),
    // Voila ce que tu devra fournir (Notre menu)
    LoggerService,
    HelloService,
    AuthInterceptorProvider,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    // Todo preloadingStrategy: CustomPreloadingStrategy
    provideRouter(routes, withPreloading(CustomPreloadingStrategy)),
  ],
}).catch((err) => console.error(err));
