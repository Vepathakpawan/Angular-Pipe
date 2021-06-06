import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPipe';


name = 'PAWAN'
msg = "hello from Pawan"
fullName = "Pawan Vedpathak"
birthday = new Date(1997,14,12)

}
