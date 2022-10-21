import { FirestoreService } from 'src/app/services/firestore.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { mensajess } from 'src/app/models/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  username:string='';
  mensaje: mensajess[]=[];

    constructor(
      private router:Router,
      private activatedRouter:ActivatedRoute,
      private menu:MenuController,
      private database:FirestoreService 
    ){}
    
     ngOnInit() {}
    
  

  
    verMenu(){
      this.menu.open('first');
    }
  




  
    getResultados() {

      const path = 'mensajes';
      this.database.getCollection<mensajess>(path).subscribe( res => {
          console.log('esta es la lectura', res);
          this.mensaje = res;
      })

  }
}