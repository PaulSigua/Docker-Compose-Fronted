//Tercera parte crear un servicio, importamos las librerias que necesitamos
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { MensajeUsuario } from '../domain/cliente';

// Decorator para el servicio
@Injectable({
  providedIn: 'root'
})

//Exportamos el servicio
export class ClienteService {

  constructor(private http: HttpClient) { }//Cuarta parte

  getMensajesUsuario(){
    let url = environment.WA_PATH + '/mensaje/list';
    return this.http.get<any>(url);
  }

  //Guardamos el mensaje de los clientes/usuarios
  saveMensajeUsuario(mensaje: MensajeUsuario){
    let url = environment.WA_PATH + '/mensaje';
    return this.http.post<any>(url, mensaje);
  }

  updateMensajeUsuario(mensaje: MensajeUsuario){
    let url = environment.WA_PATH + '/mensaje';
    return this.http.put<any>(url, mensaje);
  }

  deleteMensajeUsuario(codigo: number) {
    let url = environment.WA_PATH + '/mensaje?id=' + codigo;
    return this.http.delete<any>(url);
  }

}
