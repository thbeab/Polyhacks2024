import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"polyhacks-66e34","appId":"1:1068220782259:web:ad158376f470cdc99f02c6","storageBucket":"polyhacks-66e34.appspot.com","apiKey":"AIzaSyDcwMQsybxx1XE_Bbi7pi6j5V7-7KYGkiw","authDomain":"polyhacks-66e34.firebaseapp.com","messagingSenderId":"1068220782259","measurementId":"G-GJNYJWLX52"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
