import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { routes } from './app.routes';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { supabase } from '../environments/environment';

registerLocaleData(localeFr, 'fr-FR');

export const supabaseClient  = createClient(
      supabase.supabaseUrl,
      supabase.supabaseKey,
      { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
    );

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
     { provide: SupabaseClient, useValue: supabaseClient },
     { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
};

