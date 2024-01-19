import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent implements OnInit {

  constructor() { }


  @Input() icon: string = "";
  @Input() label: string = ""; // hover
  @Input() link: string = "";
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() customSpyId : string;
 

  ngOnInit(): void {
  }

}
