import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

import { importProvidersFrom, isDevMode } from '@angular/core';


import { provideServiceWorker } from '@angular/service-worker';



bootstrapApplication(App, { 
  ...appConfig,
    providers: [provideAnimations(),
    ...(appConfig.providers || []),
    importProvidersFrom(FormsModule), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ],
})
  .catch((err) => console.error(err));
