import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string = '';

  constructor(
    private controladorToast: ToastController
  ) {}

  async saludar(){
    const toast = await this.controladorToast.create({
      message: '¡Hola '+this.nombre+'!',
      duration: 2000,
      position: 'bottom'
    });
  await toast.present();
  }

}
