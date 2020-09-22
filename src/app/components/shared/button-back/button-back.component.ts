import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'



@Component({
  selector: 'app-back',
  template: `
  <div class="container text-center col-4">
    <button (click)="goBack()" class="btn btn-secondary btn-block">Volver</button>
  </div>
  `,
})
export class ButtonBackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): any{
      this.location.back();
  }

}
