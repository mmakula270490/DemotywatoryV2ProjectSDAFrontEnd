import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showContent(){
    this.show = true;
  }
}
