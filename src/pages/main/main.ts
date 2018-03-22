import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PesquisaPage } from '../pesquisa/pesquisa';
import { ArquivosBaixadosPage } from '../arquivos-baixados/arquivos-baixados';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  private rootPage : any;
  private pesquisaPage : any;
  private logoutPage : any;
  private arquivosBaixadosPage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //navCtrl.setRoot(MainPage);
    this.rootPage = MainPage;
    this.pesquisaPage = PesquisaPage;
    this.logoutPage = HomePage;
    this.arquivosBaixadosPage = ArquivosBaixadosPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    //this.mainPage = p;
  }

}
