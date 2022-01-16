import { Component, Input, OnInit, Output } from '@angular/core';
import { Demotywator } from '../models/demotywator';
import { DemotService } from '../service/demot.service';
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  @Input()
  public demot!: Demotywator;

  constructor(private demotService: DemotService) { }

  ngOnInit(): void {
  }

  voteUp(id: number): void {
    this.demotService.voteUp(id).subscribe(demot =>{});
    
  }

  voteDown(id: number): void {
    this.demotService.voteDown(id).subscribe(demot =>{})
  }

}
