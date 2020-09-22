import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';





const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personaje/:id', component: PersonajeComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];



export const appRoutingProviders: any[]= [];
export const APP_ROUTER: ModuleWithProviders<any> = RouterModule.forRoot(ROUTES);


 