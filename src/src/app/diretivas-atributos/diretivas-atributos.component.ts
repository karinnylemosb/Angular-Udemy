import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public height: string = "20px";
  public backgroundColor: string = "yellow";

  public nome: string ="";
  public list: Array<{nome: string}> = [{nome: "Léo"}];

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {

      if (this.valor){
        this.valor = false;
      } else{
        this.valor = true;
      }

      if (this.height == "20px") {
        this.height = "50px";
        this.backgroundColor = "blue"
      }else{
        this.height = "20px";
        this.backgroundColor = "yellow"
      }

    }, 2000);
    }


    public salvar(){
      this.list.push ({nome: this.nome});
    }
  }


