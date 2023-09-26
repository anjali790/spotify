import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { SpotifyUser } from '../spotifyuserregistraction/domain/SpotifyUser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  AdminData:SpotifyUser[]=[]
  constructor(private log:LoginService){}
  ngOnInit(): void {
    this.log.fetchData().subscribe(
      {next:data3=>{this.AdminData=data3},
       error:e=>{alert("something went wrong")}
        }
    )
   
  }

}
