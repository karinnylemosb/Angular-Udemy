import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core'; //vem pré-setado pra ser usado


@Component({
  selector: 'app-root', //onde é feito a inicialização do app
  template: `
  <app-data-biding></app-data-biding>
  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit  {

  constructor() {}

  ngOnInit(): void {}




  }




// router-outlet: verifica se esxistem rotas no angular
// templateUrl: faz referencia ao html
// styleUrls: faz referência aos estilos


//Ali no <app-title> está recebendo um componente padrão configurado, que pode receber várias configurções para ser reutilizado. Mas caso eu queira modificar aqui dentro do próprio component, eu posso: <app-title title="Olá"></app-title>
