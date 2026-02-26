import { ApplicationConfig, importProvidersFrom ,provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { supabase } from '../environments/environment';

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
     { provide: SupabaseClient, useValue: supabaseClient }
  ]
};

