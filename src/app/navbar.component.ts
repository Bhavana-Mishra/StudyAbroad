// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   standalone:true,
// })
// export class NavbarComponent {
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl:'./navbar.component.css',
  standalone:true,

})
export class NavbarComponent {
  title = 'Navbar';

  constructor(private router: Router) {
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }
}