import { Routes } from '@angular/router';

import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'oferta', component: HomeComponent},
  {path: 'oferta/:id', component: OfertaComponent, children: [
    {path: '', component: ComoUsarComponent},
    {path: 'comoUsar', component: ComoUsarComponent},
    {path: 'ondeFica', component: OndeFicaComponent}
  ]}
];
