import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(App, { 
  ...appConfig,
    providers: [provideAnimations(),
    ...(appConfig.providers || []),
    importProvidersFrom(FormsModule), 
    
  ],
})
  .catch((err) => console.error(err));
