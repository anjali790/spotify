import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SpotifyUser } from '../spotifyuserregistraction/domain/SpotifyUser';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent implements OnInit {
  User = new SpotifyUser()
  
  constructor(private loginservice:LoginService,private route:Router){}
  pro()
  {
    this.loginservice.loginUser(this.User).subscribe({next(x){alert("Login Successful")},
    error(){alert("error")},
    complete(){alert("Completed")}})
  }


  
  ngOnInit(): void {}

}
