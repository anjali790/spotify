import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ContentComponent } from './content/content.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { SpotifyuserregistractionComponent } from './spotifyuserregistraction/spotifyuserregistraction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogincompComponent } from './logincomp/logincomp.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListofsongsComponent } from './listofsongs/listofsongs.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { PlayComponent } from './play/play.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SpotifyuserregistractionComponent,
    LogincompComponent,
    HomeComponent,
    AdminComponent,
    AdminloginComponent,
    ListofsongsComponent,
    WelcomepageComponent,
    PlayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
