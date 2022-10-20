import { Component, Input, OnChanges, OnInit } from '@angular/core';
// OnInit: ciclo de vida do angular.

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title:string = "Bem vindo!";

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    alert("Fui alterado com sucesso!!");

  }
}


// o ngOnChanges só é invocado quando vem dados de fora.
