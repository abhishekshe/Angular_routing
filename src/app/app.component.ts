import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agular_shorts';

  constructor(private router:Router){}

  gotoDashboard(){
    this.router.navigate(['dashboard',101])

  }
}


