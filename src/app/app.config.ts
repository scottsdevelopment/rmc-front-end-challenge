import AppConfig from './app-config.model';
import { InjectionToken } from '@angular/core';

export const ENROLLEE_APP_CONFIG: AppConfig = {
  apiEndpoint: 'http://localhost:8080',
};

export const APP_CONFIG = new InjectionToken<AppConfig>(
  'Application Configuration',
  {
    providedIn: 'root',
    factory: () => ENROLLEE_APP_CONFIG,
  },
);
