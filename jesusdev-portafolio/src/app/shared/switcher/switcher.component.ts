import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  @Input() isChecked : boolean = false;
  @Input() name: string = "";

  constructor() { }


  ngOnInit(): void {
   

  }

  

}
