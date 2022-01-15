import { Component, OnInit } from '@angular/core';
import { Demotywator } from 'src/app/models/demotywator';
import { GetResponseList } from 'src/app/models/GetResponseList';
import { DemotService } from 'src/app/service/demot.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  demoty!: Demotywator[] | undefined;
  constructor(private demotService: DemotService) {
  //  var demot: Demotywator = new Demotywator();
  //  demot = {
  //    topText:'test',
  //    imagePath: 'test1',
  //    bottomText: 'test2'
  //  }
  //  var demot2: Demotywator = new Demotywator();
  //  demot2 = {
  //    topText:'test3',
  //    imagePath: 'test4',
  //    bottomText: 'test5'
  //  }
  // this.demoty.push(demot);
  // this.demoty.push(demot2);

    this.demotService.getDemotywatory().subscribe(
      (getResponseList: GetResponseList) => {
        this.demoty = getResponseList.posts;
        // console.log(getResponseList.posts);
      },
      (error: any) => {
        console.log('wystąpił błąd', error); 
      }
      );
    }

  ngOnInit(): void {
  }
  
}

