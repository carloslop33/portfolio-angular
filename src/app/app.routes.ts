import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import {ContactoComponent} from './paginas/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
