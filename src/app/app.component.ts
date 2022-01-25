import { Component, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';

  @ViewChild('myForm', { static: false }) signupForm: NgForm;
  selectedLevel = 'Pro';

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
