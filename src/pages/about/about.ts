import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  cartItems: { id: any, name: any };

  ionViewWillEnter(){
  	this.storage.get('cartItems').then((val) => {
  		this.cartItems = val;
  	})
  }

}
