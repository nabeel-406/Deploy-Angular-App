// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// bootstrapApplication(AppComponent, appConfig, {
//   providers: [
//     BrowserAnimationsModule,importProvidersFrom(ToastrModule.forRoot())
//   ]
// })
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations'; // Needed for ngx-toastr
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr'; // Import ToastrModule
// import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent,  {
  providers: [
    provideAnimations(),  // Required for animations
    importProvidersFrom(ToastrModule.forRoot()),
    importProvidersFrom(HttpClientModule)    // Global Toastr config
  ]
}).catch(err => console.error(err));
