import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecuperarSenhaPage } from '../recuperar-senha/recuperar-senha';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  recuperarSenhaPage: any;
  mainPage: any;

  constructor(public navCtrl: NavController) {
    this.recuperarSenhaPage = RecuperarSenhaPage;
    this.mainPage = MainPage;
    //navCtrl.setRoot(MainPage);

    


  }

}
