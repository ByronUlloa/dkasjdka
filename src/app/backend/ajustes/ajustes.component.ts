
import { InteractionService } from './../../services/interaction.service';
import { mensajess } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { identity } from 'rxjs';


@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})

export class AjustesComponent implements OnInit {
  data: mensajess = {
    profesor:{
    materia: '',
    seccion: null,
    mensaje: '',
    profesor: '',
    id: ''}
  }


  constructor( private database: FirestoreService,
    private interaction : InteractionService) { }

  ngOnInit() {}

  crearNuevoMensaje(){
    this.interaction.showLoading('Guardando...')


    const path = 'Mensajes';
    const id = this.database.getId();
    this.data.profesor.id = id;
    this.database.createDoc(this.data,path,id ).then((res) => {
      console.log('se a creado correctamente',res);
      this.interaction.closeLoading();
      this.interaction.presentToast('guardado con exito');
      
    })
  }

}
