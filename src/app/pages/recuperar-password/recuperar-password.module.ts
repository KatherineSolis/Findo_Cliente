import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { RecuperarPasswordPageRoutingModule } from './recuperar-password-routing.module';

import { RecuperarPasswordPage } from './recuperar-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPasswordPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecuperarPasswordPage]
})
export class RecuperarPasswordPageModule {}
