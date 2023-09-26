import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyUser } from './spotifyuserregistraction/domain/SpotifyUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginSuccess:boolean=false
  
  isLogin(details:any){
    if(details!=null){
      this.isLoginSuccess=true;
      alert("Login Successfull");
    }else{
      alert("Enter valid Credentials")
    }
  }

  constructor(private httpclient:HttpClient) { }
  storeData(data1:any){
    return this.httpclient.post("http://localhost:9005/api/v1/saveSpotifyUser",data1);
  }

  fetchData():Observable<Array<SpotifyUser>>{
    return this.httpclient.get<Array<SpotifyUser>>("http://localhost:9005/api/v1/fetchAllSpotifyUsers")
  }

  loginUser(data2:any):Observable<SpotifyUser>{
    return this.httpclient.post<SpotifyUser>("http://localhost:9005/api/v2/login",data2)
  }
  
  fetch(email?:string,password?:string):Observable<Array<SpotifyUser>>{
    return this.httpclient.get<Array<SpotifyUser>>("http://localhost:9005/api/v1/getbtemail"+"/"+email+"/"+password);
  }
}
