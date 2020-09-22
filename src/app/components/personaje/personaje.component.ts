import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeServiceService } from '../../services/personaje-service.service';



@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html'
})
export class PersonajeComponent implements OnInit {

  loading: boolean;
  id: string;
  personajeId: any = {};
  constructor(
    private personaje: PersonajeServiceService,
    private router: ActivatedRoute
    ) {
    
    this.router.params.subscribe(params => this.id = (params['id']));
    this.getPersonajeById(this.id);
   }

   getPersonajeById(id): any{
      this.loading = true;
      this.personaje.getCharacterById(id).subscribe(data =>{

      this.personajeId = data;

      // console.log(this.personajeId);

      this.loading = false;

    });

   }






  ngOnInit(): void {
  }

}
