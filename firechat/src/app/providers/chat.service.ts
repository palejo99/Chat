import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import  { Mensaje } from "../interface/mensaje.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chats: Mensaje[]=[];
  
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  constructor(private afs: AngularFirestore) {}
    cargarMensajes(){
      
      this.itemsCollection = this.afs.collection<Mensaje>('chats');
      return  this.itemsCollection.valueChanges()
                                   .pipe(map((mensajes:Mensaje[]) =>{
                                     console.log(mensajes);
                                     this.chats= mensajes;
                                   }))
                                   
                                 
  }

  agregarMensaje (texto: string) {
    let mensaje: Mensaje = {
     nombre:'Demo',
     mensaje:texto,
     fecha:new Date().getTime()
   }
   return this.itemsCollection.add(mensaje);
   
 }

  
}

