import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelManagement_Frontend';
  user=new User();

  constructor(private authService : AuthService){}


  // login(user:User){
  //   this.authService.login(user).subscribe((token : string)=>{
  //     localStorage.setItem('authToken', token);
  //   });
}
