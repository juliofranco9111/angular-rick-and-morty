import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  urlApi = 'https://rickandmortyapi.com/api';
  personajes: any[] = [];

  constructor(private http: HttpClient) {
    // console.log('Service character works');
  }

   // tslint:disable-next-line: typedef
  getCharacter(page): any {
    return this.http.get(`${this.urlApi}/character/?page=${page}`).pipe(map(data => {

      // console.log(data);

      return data['results'];

    }));
  }

  getPage(): any {
    return this.http.get(`${this.urlApi}/character/`).pipe(map(data => data['info'].pages));
  }

  getCharacterById(id): any {
    // console.log(id,'from service');
    return this.http.get(`${this.urlApi}/character/${id}`).pipe(map(data => data
    ));


  }

  getCharacterByName(name): any {
    return this.http.get(`${this.urlApi}/character/?name=${name}`).pipe(map(data => data['results']));
  }



}
