import { Component, OnInit, Input } from '@angular/core';
import { LogoItem } from 'src/app/core/models/logoItem';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit {

  @Input() logos: LogoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
