import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SpotifyUser } from '../spotifyuserregistraction/domain/SpotifyUser';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit{
  email1?:string;
  password1?:string  
 
  loggedInUser:SpotifyUser[]=[]
  constructor(private loginservice:LoginService,private route:Router){}
  
  pro2()
  {
    this.loginservice.fetch(this.email1,this.password1).subscribe(
      {next:data5=>{this.loggedInUser=data5},
       error:e=>{alert("something went wrong")}
        }
    )
  }


  
  ngOnInit(): void {

    
  }

}
