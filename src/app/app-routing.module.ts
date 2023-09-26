import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { ListofsongsComponent } from './listofsongs/listofsongs.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { PlayComponent } from './play/play.component';
import { SpotifyuserregistractionComponent } from './spotifyuserregistraction/spotifyuserregistraction.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [

  {path:"spotifyregister",
   component:SpotifyuserregistractionComponent
},
{
  path:"Userlogin",
  component:LogincompComponent
},
{
  path:"play",
  component:PlayComponent
},
{
  path:"welcome",
  component:WelcomepageComponent
},

{
  path:"listofsongs",
  component:ListofsongsComponent
},
{path:"home",
component:HomeComponent},
{path:"adminlogin",
component:AdminloginComponent},
{path:"admin",
component:AdminComponent,
canActivate:[AdminGuard]
},

{path:"**",
component:WelcomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
