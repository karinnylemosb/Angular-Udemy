import { Component, OnInit } from '@angular/core'; //vem pré-setado pra ser usado

@Component({
  selector: 'app-root', //onde é feito a inicialização do app
  template: `
  <app-title></app-title>
  <router-outlet></router-outlet>

  `

})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
     setTimeout(() => {
      console.log(1);
     }, 5000 )
  }

}


// router-outlet: verifica se esxistem rotas no angular
// templateUrl: faz referencia ao html
// styleUrls: faz referência aos estilos
