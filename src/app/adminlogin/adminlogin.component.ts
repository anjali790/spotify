import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username?:string=''
  password?:string=''
  login(){
    if(this.username==='admin'&&this.password==='123')
    {
      this.loginserver.isLoginSuccess=true;
      this.router.navigateByUrl("admin")
      alert("LOGIN SUCCESS")
      
      
    }
    else{
      this.loginserver.isLoginSuccess=false
      alert("LOGIN FAILED")
    }
  }

constructor(private loginserver:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
}
