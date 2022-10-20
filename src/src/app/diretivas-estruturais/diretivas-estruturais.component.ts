import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome:string, idade: number}> = [
    {nome:"Karinny Lemos", idade:26},
    {nome:"Mozão", idade:30},
    {nome:"Bento", idade: 7},
    {nome:"Nina", idade:2},
];


public nome: string = 'Rafa';

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition){
        this.condition = false;
      }else{
      this.condition = true}
    }, 2000)

  }

  public onClick(){
    if (this.conditionClick){
      this.conditionClick = false;
    }else{
    this.conditionClick = true}

  }

  public onClickAddList(){
    this.list.push({nome:"Paulo", idade: 50});
  }
// Função para remover itens
  public onClickEventList (event:number){
    this.list.splice(event,1)
    // Apaga apenas 1
  }



}
