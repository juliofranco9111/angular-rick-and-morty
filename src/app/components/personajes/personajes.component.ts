import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeServiceService } from '../../services/personaje-service.service';




@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  personajes: any = [];
  pages: number;
  page = 1;

  loading: boolean;

  constructor(
    private personaje: PersonajeServiceService,
    private router: Router
    ) {

    this.loading = true
    this.getCharacter(this.page);

    this.personaje.getPage().subscribe((pages): any => {
      // console.log(pages);
      this.pages = pages;
    });



  }
  getCharacter(page: number): any {

    this.personaje.getCharacter(page).subscribe((data): any => {

      this.personajes = data;
      this.loading = false;
      // console.log(data);



    }, (err) => {
      console.log(err);
    });


  }

  sumaPage(): any {
    this.loading = true;
    if (this.page < this.pages) {
      this.page = this.page + 1;
      // console.log(this.page);
      this.getCharacter(this.page);
      this.loading = false;
    }else{
      return;
    }




  }
  restaPage(): any {
    this.loading = true;
    if (this.page > 1) {
      this.page = this.page - 1;
      // console.log(this.page);
      this.getCharacter(this.page);
      this.loading = false;
    }else{
      return;
    }



  }

  getPersonaje(id): any {
    //console.log(id);
    this.router.navigate(['personaje', id]);

  }



  ngOnInit(): void {
  }



}
