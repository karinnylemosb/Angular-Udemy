import { Component, OnInit } from '@angular/core'; 
// OnInit: ciclo de vida do angular.

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public title:string = "Kaka";

  constructor() { }

  ngOnInit(): void {
  }

}
