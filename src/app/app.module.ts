import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';





import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent,AjustesComponent],
  imports: [BrowserModule, CommonModule,IonicModule.forRoot(),AngularFirestoreModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebaseConfig),AppRoutingModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
