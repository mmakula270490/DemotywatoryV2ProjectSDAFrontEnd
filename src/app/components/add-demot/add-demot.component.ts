import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Demotywator } from 'src/app/models/demotywator';
import { DemotService } from 'src/app/service/demot.service';

@Component({
  selector: 'app-add-demot',
  templateUrl: './add-demot.component.html',
  styleUrls: ['./add-demot.component.css']
})
export class AddDemotComponent implements OnInit {

  title!: String;
  source!: String;
  subtitle!: String;
  fileName = '';


  constructor(private demotService: DemotService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  verifyForm(): boolean{
    return this.title == undefined || this.source == undefined || this.subtitle == undefined;
  }
  
  addNewPost(){
    this.demotService.addNewPost(new Demotywator(
    this.title,
    this.source,
    this.subtitle)).subscribe();
  }

  onclick(){
    if(!this.verifyForm()){
      this.addNewPost();
    }
    console.log("not valid form");
  }


  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();
    }
}

}
