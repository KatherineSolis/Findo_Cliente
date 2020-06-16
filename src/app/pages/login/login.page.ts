import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

    usuario ={
        email:'',
        password:'',
    };

  constructor()
  {

  }
  ngOnInit(): void {
      console.log("login");
  }

  ingresar()
  {

    console.log(this.usuario);
    console.log("mandar al home");
  }

}
