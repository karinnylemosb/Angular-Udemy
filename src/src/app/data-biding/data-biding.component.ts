import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Kaka linda";
  public idade: number = 29;

  public checkedDisable: boolean = false;
  public imgSrc: string = "https://cdn-icons-png.flaticon.com/512/1088/1088537.png?w=360";
  public imgTitle: string = "Imagem WOW";
  public  position: {x: number,y:number} = {x: 0,y:0};

  constructor() { }

  public alertInfo(valor: MouseEvent){
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent){

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }

  ngOnInit(): void {
  }

}
