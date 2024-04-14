import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-page-manager',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './home-page-manager.component.html',
  styleUrl: './home-page-manager.component.css'
})
export class HomePageManagerComponent {

constructor(public route:Router, private router: ActivatedRoute){} 

passComponent(numComponent: number) {
  switch (numComponent) {
    case (1):{
      this.route.navigate(['/HomePageManager/managerAllCourses'])
      break;
    }
    case (2): {
      this.route.navigate(['/HomePageManager/addTeacher'])
      break;
    }
    case (3):{
      this.route.navigate(['/'])
      break;
    }
    case (4): {
      this.route.navigate(['HomePageManager/teachersReport'])
      break;
    }
    case (5):{
      this.route.navigate(['/'])
      break;
    }
   
    default: {
      this.route.navigate(['/'])
      break;
    }
  }
}


  // Disconnected(){//התנתק
  //   this.router.navigate(['/Home'])
  // }
}
