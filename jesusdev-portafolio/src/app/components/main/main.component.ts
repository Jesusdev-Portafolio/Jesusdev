import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

   mainText = ["Soy <span class='color-azul'>Jesus</span> y soy <span class='color-azul'>&nbsp;&nbsp;Desarrollador</span> web"];
   showButtons = false;
   constructor() { }

   

  ngOnInit(): void {
  }

}
