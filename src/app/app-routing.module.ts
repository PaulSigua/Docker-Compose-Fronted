// Importaciones de librerias necesarias para el funcionamiento del modulo
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';

// Constante que donde se almacenan las rutas que redirigen hacia los componentes del angular
const routes: Routes = [
  {path: '', redirectTo: 'pages/mensaje', pathMatch: 'full'},
  {path: 'pages/mensaje', component: ContactanosComponent},
];

//Decorador que define al modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Exportacion de la clase
export class AppRoutingModule { }
