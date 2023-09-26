import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { SpotifyUser } from '../spotifyuserregistraction/domain/SpotifyUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  SpotifyData:SpotifyUser[]=[]
  constructor(private loginservice:LoginService){}
  ngOnInit(): void {
    this.loginservice.fetchData().subscribe(
      {next:data=>{this.SpotifyData=data},
       error:e=>{alert("something went wrong")}
        }
    )
   
  }

}
