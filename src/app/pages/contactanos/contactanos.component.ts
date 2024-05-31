//Importacion de librerias para el funcionamiento del componente
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MensajeUsuario } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

//Decorador que define el componente
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})

// Exportacion de la clase
export class ContactanosComponent implements OnInit {

  //Declaracion de variables
  men: MensajeUsuario = new MensajeUsuario();
  hayResultados: boolean = false;
  mensajeCorrecto: boolean = false;
  mensajes: any;
  editMode: boolean = false;

  //Metodo constructor del componente
  constructor(private clienteServices: ClienteService) {
    window.scrollTo({
      top: 0
    })
  }

  ngOnInit(): void {
    this.mensajes = this.clienteServices.getMensajesUsuario();
  }

  @ViewChild('nombreUsuario') nombreUsuarioRef?: ElementRef;
  @ViewChild('correo') correoRef?: ElementRef;
  @ViewChild('mensajeUsuario') mensajeUsuarioRef?: ElementRef;

  //Metodo que guarda el mensaje ingresado por los usuarios
  guardarMensaje(nombreUsuario: HTMLInputElement, correo: HTMLInputElement, mensajeUsuario: HTMLTextAreaElement) {
    //Condicion para validar los datos en los inputs
    if (!nombreUsuario.value || !correo.value || !mensajeUsuario.value) {
      this.mensajeCorrecto = false;
      this.hayResultados = true;
    } else {
      this.hayResultados = false;
      let mensaje: any = {
        nombre: nombreUsuario.value,
        correo: correo.value,
        mensaje: mensajeUsuario.value
      }

      if (this.editMode) {
        mensaje = { ...mensaje, codigo: this.men.codigo }; // Crear un nuevo objeto con el código
      }

      this.men = mensaje;

      if (this.editMode) {
        this.clienteServices.updateMensajeUsuario(this.men).subscribe(data => {
          console.log(data);
          this.resetForm(nombreUsuario, correo, mensajeUsuario);
          this.mensajeCorrecto = true;
          this.editMode = false;
          this.ngOnInit();
        });
      } else {
        this.clienteServices.saveMensajeUsuario(this.men).subscribe(data => {
          console.log(data);
          this.men = new MensajeUsuario();
          this.resetForm(nombreUsuario, correo, mensajeUsuario);
          this.mensajeCorrecto = true;
          this.ngOnInit();
        });
      }
    }
  }

  resetForm(nombreUsuario: HTMLInputElement, correo: HTMLInputElement, mensajeUsuario: HTMLTextAreaElement) {
    nombreUsuario.value = '';
    correo.value = '';
    mensajeUsuario.value = '';
  }

  editarMensaje(mensaje: MensajeUsuario) {
    this.men = { ...mensaje }; // Use spread operator to copy message
    this.editMode = true;
    this.nombreUsuarioRef!.nativeElement.value = mensaje.nombre;
    this.correoRef!.nativeElement.value = mensaje.correo;
    this.mensajeUsuarioRef!.nativeElement.value = mensaje.mensaje;
  }

  eliminarMensaje(codigo: number) {
    this.clienteServices.deleteMensajeUsuario(codigo).subscribe(
      data => {
        console.log(data);
        if (data.ok === false) {
          console.error('Error al eliminar el mensaje');
          // Aquí puedes mostrar un mensaje al usuario indicando que hubo un error al eliminar el mensaje
        } else {
          console.log('Mensaje eliminado correctamente');
          window.location.reload(); // Recargar la página después de eliminar el mensaje
        }
      },
      error => {
        console.error(error);
        // Manejar el error aquí
      }
    );
  }

}
