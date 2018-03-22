import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecuperarSenhaPage } from '../pages/recuperar-senha/recuperar-senha';
import { MainPage } from '../pages/main/main';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';
import { ArquivosBaixadosPage } from '../pages/arquivos-baixados/arquivos-baixados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecuperarSenhaPage,
    MainPage,
    PesquisaPage,
    ArquivosBaixadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecuperarSenhaPage,
    MainPage,
    PesquisaPage,
    ArquivosBaixadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
