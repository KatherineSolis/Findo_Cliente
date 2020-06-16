import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmar-registro',
  templateUrl: './confirmar-registro.page.html',
  styleUrls: ['./confirmar-registro.page.scss'],
})
export class ConfirmarRegistroPage implements OnInit {

  constructor() { }

  ngOnInit()
  {

  }
  ConfirmarCodigo()
  {
      console.log("su registro ha sido exitoso");
  }
}
