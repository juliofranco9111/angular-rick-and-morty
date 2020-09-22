import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTER } from './app.routes';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ButtonBackComponent } from './components/shared/button-back/button-back.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    NavbarComponent,
    PersonajeComponent,
    HomeComponent,
    LoadingComponent,
    BusquedaComponent,
    ButtonBackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
