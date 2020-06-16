import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

    public botonok:String ="el boton si";
    persona ={
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    };
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: '<br><strong>Está seguro que desea cancelar su registro.</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton no');
          }
        }, {
          text: 'SI',
          handler: (variable) => {
            variable = this.botonok;
            console.log('Confirmación desde', variable);


          }
        }
      ]
    });

    await alert.present();
  }
  Guardar()
  {
        console.log(this.persona);
  }

}
