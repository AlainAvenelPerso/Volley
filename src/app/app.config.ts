import { ApplicationConfig, importProvidersFrom ,provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, initializeFirestore, getFirestore, connectFirestoreEmulator  } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => { 
      const app = initializeApp(environment.firebaseConfig);

      // Obtient l'instance Firestore

const db = getFirestore(app);




if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {

  console.log("Connecté à l'émulateur Firestore sur localhost:8080");

  // Le port 8080 est le port par défaut pour l'émulateur Firestore

  // (vérifiez-le avec `firebase emulators:start` si vous l'avez modifié)

  connectFirestoreEmulator(db, '127.0.0.1', 8080);

}

// ************************************************************


// Exportez l'instance de la base de données pour l'utiliser dans votre application

//export { db };

      //self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

      // 🔐 Initialisation d'App Check avec reCAPTCHA v3
    //   const appCheck =initializeAppCheck(app, {
    //     provider: new ReCaptchaV3Provider('6LejXQgsAAAAALhJ4vktJ53ad0CJOB2wLclaPVnQ'),
    //     isTokenAutoRefreshEnabled: true
    //   });

    //         if (environment.debugAppCheck) {
    //   getToken(appCheck ).then(token => {
    //     console.log("Jeton App Check :", token.token);
    //   }).catch(err => {
    //     console.error("Erreur App Check :", err);
    //   });
    // }
      return app;
    }),
    // Utilise l'instance Firebase déjà initialisée
      provideFirestore(() => getFirestore()),
    provideRouter(routes)
  ]
};

