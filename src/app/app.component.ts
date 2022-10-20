import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-root', //onde é feito a inicialização do app
  template: `
  <app-data-biding></app-data-biding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos>
  <h1> Aulas diretivas tananan </h1>
  <hr>
  </app-diretivas-atributos>

  <app-new-component></app-new-component>

  <app-input [contador] = "addValue"></app-input>
  <br>
  <button (click) = "add()"> Adicionar </button>

  <ng-template [ngIf] = "getDados">
    <h1> {{getDados.nome}} </h1>
    <h2> {{getDados.idade}} </h2>
  </ng-template>

  <app-output (enviarDados)="setDados($event)"> </app-output>


  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit  {

  public addValue: number = 0;

  public getDados: {nome:string, idade:number} | undefined;

  constructor() {}

  ngOnInit(): void {

  }

  public add(){
    this.addValue += 1;
  }

  public setDados (event: any){
    this.getDados = event;
  }





  }




// router-outlet: verifica se esxistem rotas no angular
// templateUrl: faz referencia ao html
// styleUrls: faz referência aos estilos


//Ali no <app-title> está recebendo um componente padrão configurado, que pode receber várias configurções para ser reutilizado. Mas caso eu queira modificar aqui dentro do próprio component, eu posso: <app-title title="Olá"></app-title>



