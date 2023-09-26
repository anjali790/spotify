import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listofsongs',
  templateUrl: './listofsongs.component.html',
  styleUrls: ['./listofsongs.component.css']
})
export class ListofsongsComponent {
  log(){
      alert("Songs Added To Playlist !!!")
      this.route.navigateByUrl("welcome")
  }
  Listofsongs = [{"url":"/assets/01aAfterTheBall.mp3","name":"AfterTheBall"},
  {"url":"/assets/Hunson Abadeer.mp3","name":"HunsonAbadeer"} ,
  {"url":"/assets/Naruto - I Said Im Naruto.mp3","name":"I Said Im Naruto"},
  {"url":"/assets/Naruto - Need To Be Strong.mp3","name":"Need To Be Strong"},
  {"url":"/assets/Naruto - Sadness and Sorrow.mp3","name":"Sadness and Sorrow"},
  {"url":"/assets/Naruto Shippuden - Naruto and Hinatas love.mp3","name":"Naruto and Hinatas love"},
  {"url":"/assets/Naruto Shippuden - Opening 1 - Full.mp3","name":"Naruto Shippuden - Opening"},
  {"url":"/assets/One Piece - Believe.mp3","name":"Believe"},
  {"url":"/assets/One Piece - Opening 4.mp3","name":"One Piece-Opening"},
  {"url":"/assets/One Piece - Opening 15.mp3","name":"MinaZukii"},

];
constructor(private route:Router){}
}
