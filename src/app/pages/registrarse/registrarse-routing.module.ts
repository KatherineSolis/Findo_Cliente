import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarsePage } from './registrarse.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarsePage
  },
  {
    path: 'confirmar-registro',
    loadChildren: () => import('../confirmar-registro/confirmar-registro.module').then( m => m.ConfirmarRegistroPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarsePageRoutingModule {}
