import { Component, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../services/personaje-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  loading: boolean;
  error: boolean;
  nombrePersonaje = '';
  personajes = [];

  constructor(
    private personaje: PersonajeServiceService,
    private router: Router,

    ) {
    this.loading = false;





  }

  ngOnInit(): void {
  }

  buscarNombre(nombre): any{

    this.personaje.getCharacterByName(nombre).subscribe( data => {
      this.loading = true;
      if(data.length > 0){
      this.personajes = data;
      this.loading = false;
      this.error = false;
      }



    },(err)=>{
      this.loading = false;
      this.error = true;
    });
  }

  getCharacterById(id): any {

    this.router.navigate(['personaje', id]);
  }



}
