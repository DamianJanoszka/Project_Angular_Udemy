import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-first-app';
  projectForm: FormGroup;

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')

    });
  }
  onSubmit(){
    console.log(this.projectForm.value)
  }
}
