import { DaireSahibiComponent } from './components/dairesahibi/dairesahibi.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AidatlarComponent } from './components/aidatlar/aidatlar.component';
import { YoneticilerComponent } from './components/yoneticiler/yoneticiler.component';
import { DairelerComponent } from './components/daireler/daireler.component';
import { UploaderComponent } from './uploader/uploader.component';

const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: 'home',
    component:
      HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  }
  ,
  { path: '', component: LoginComponent },{ path: 'login', component: LoginComponent },
  { path: 'dairesahibi', component: DaireSahibiComponent }
  ,

{path:"aidatlar",
  component: AidatlarComponent

},
{path:"yoneticiler",
  component: YoneticilerComponent

},
{path:"daireler",
  component: DairelerComponent
  
},
{path:"uploader",
  component: UploaderComponent
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
