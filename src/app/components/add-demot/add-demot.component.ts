import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemotService } from 'src/app/service/demot.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-demot',
  templateUrl: './add-demot.component.html',
  styleUrls: ['./add-demot.component.css']
})
export class AddDemotComponent implements OnInit {

  myForm = new FormGroup({
    topText: new FormControl('', [Validators.required, Validators.minLength(3)]),
    bottomText: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
    
  constructor(private DemotService: DemotService, private router: Router) { }
      
  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
     
  submit(){
    const formData = new FormData();
    formData.append('image', this.myForm.get('fileSource')!.value);
    formData.append('topText', this.myForm.get('topText')!.value);
    formData.append('bottomText', this.myForm.get('bottomText')!.value);


    this.DemotService.addNewPost(formData)
    .subscribe(res => {
        alert('Uploaded Successfully.');
      })

      if(this.myForm.valid){
        this.navigateToMain();
      }
  }

  ngOnInit(): void {
  } 

  navigateToMain() {
    this.router.navigateByUrl('/');
  }
}
