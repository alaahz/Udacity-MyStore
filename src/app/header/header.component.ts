import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logo='assets/shopelog.png';

  cart='assets/cart.png'
  faUser=faUser;

}
