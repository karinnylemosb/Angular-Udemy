import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

 @Output() public enviarDados = new EventEmitter(); //Ele emite que algum dado foi enviado;


 public list: Array < {nome: string, idade:number}> =[
    {nome: "Karinny" , idade: 26},
    {nome: "Mari" , idade: 16},
    {nome: "Clarice" , idade: 26},
  ]

  constructor() { }


public getDados (event: number){
  this.enviarDados.emit(this.list[event]); //Enviando o item da lista pra fora;

}


  ngOnInit(): void {
  }

}
