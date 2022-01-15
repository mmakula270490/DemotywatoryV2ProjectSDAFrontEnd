import { Component, Input, OnInit, Output } from '@angular/core';
import { Demotywator } from '../models/demotywator';
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
 @Input()
 public demot!: Demotywator;

constructor() {}
 
  ngOnInit(): void {
  }

}
