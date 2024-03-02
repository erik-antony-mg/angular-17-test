import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeEsPe);
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),{ provide: LOCALE_ID, useValue: 'es-PE' }]
};
