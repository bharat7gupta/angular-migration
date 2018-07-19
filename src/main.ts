import "./app/bootstrap/bootstrap.js";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {  /* angularjs run block code */ })
  .then(() => {  /* more run block code if rquired */ })
  .catch(err => console.log(err));
