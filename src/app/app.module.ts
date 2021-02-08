import { NavbarComponent } from './components/navbar/navbar.component';
import { DaireSahibiComponent } from './components/dairesahibi/dairesahibi.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { DairelerComponent } from './components/daireler/daireler.component';
import { YoneticilerComponent } from './components/yoneticiler/yoneticiler.component';
import { AidatlarComponent } from './components/aidatlar/aidatlar.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DaireSahibiComponent,
    NavbarComponent,
    DairelerComponent,
    YoneticilerComponent,
    AidatlarComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
