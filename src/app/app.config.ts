import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes = [
  { path: '', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacto', component: ContactoComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
