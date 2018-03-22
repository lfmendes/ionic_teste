import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArquivosBaixadosPage } from './arquivos-baixados';

@NgModule({
  declarations: [
    ArquivosBaixadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArquivosBaixadosPage),
  ],
})
export class ArquivosBaixadosPageModule {}
