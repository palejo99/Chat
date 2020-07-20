import { Component} from '@angular/core';
import { ChatService } from "../../providers/chat.service";
import { timestamp } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styles: [
  ]
})

export class ChatsComponent  {

  mensaje: string="";

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes()
        .subscribe();
        //  console.log(mensajes);
      
   }

  enviar_mensaje(){
    console.log(this.mensaje);

    if (this.mensaje.length ===0){
      return;
    }

    this._cs.agregarMensaje(this.mensaje)
            .then (()=>console.log('Mensaje enviado'))
            .catch ((err)=>console.error('Error al enviar',err))
  }

}
