import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { SpotifyUser } from './domain/SpotifyUser';

@Component({
  selector: 'app-spotifyuserregistraction',
  templateUrl: './spotifyuserregistraction.component.html',
  styleUrls: ['./spotifyuserregistraction.component.css']
})
export class SpotifyuserregistractionComponent implements OnInit  {
  
  sportifyform = new FormGroup({
  uid: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
  uname: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern("[A-Z]{1}[a-z]{6,}")]),
  mnumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern("[7-9]{1}[0-9]{9,}")]),
  email: new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(25),Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]),
  password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    pname: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    firstsong: new FormControl(''),
    secondsong: new FormControl(''),
    thirdsong: new FormControl(''),
    fourthsong: new FormControl(''),
    fivthsong: new FormControl('')
      
    });
    get uid(){return this.sportifyform.get('uid');}
    get uname(){return this.sportifyform.get('uname');}
    get mnumber(){return this.sportifyform.get('mnumber');}
    get email(){return this.sportifyform.get('email');}
    get password(){return this.sportifyform.get('password');}
    get pname(){return this.sportifyform.get('pname');}
    get firstsong(){return this.sportifyform.get('firstsong');}
    get secondsong(){return this.sportifyform.get('secondsong');}
    get thirdsong(){return this.sportifyform.get('thirdsong');}
    get fourthsong(){return this.sportifyform.get('fourthsong');}
    get fivthsong(){return this.sportifyform.get('fivthsong');}





 obj=new SpotifyUser()
 fun1(){
  this.login.storeData(this.sportifyform.value).subscribe(
    {next(x){alert("Spotify User Data Added")},
     error(x){alert("Error"+x)},
     complete(){alert("FINISHED REGISTRATION")}
  
  }
  )

 }

 
 
 
constructor(private login:LoginService){}
 
  ngOnInit(): void {
   
  }

}
