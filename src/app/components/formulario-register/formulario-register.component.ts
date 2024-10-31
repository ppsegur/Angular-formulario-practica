import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-register',
  templateUrl: './formulario-register.component.html',
  styleUrl: './formulario-register.component.css'
})
export class FormularioRegisterComponent {
  
    usuario = {
      nombre: '',
      apellidos: '',
      nif: '',
      email: '',
      telefono: '',
      sexo: '',
      conocimiento: '',
      contrasena: '',
      confirmarContrasena: '',
      terminos: false
    };
  
    letraNIF: string = '';
  
    calcularLetraNIF() {
      const nif = this.usuario.nif;
      if (nif.length === 8 && !isNaN(Number(nif))) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        this.letraNIF = letras[parseInt(nif) % 23];
      } else {
        this.letraNIF = '';
      }
    }
  
    registrarUsuario() {
      if(this.usuario.contrasena !== this.usuario.confirmarContrasena) {
        alert('Las contraseñas no coinciden');
        
      }else if(!this.usuario.terminos){
      console.log(this.usuario);
    }
  }
}
  