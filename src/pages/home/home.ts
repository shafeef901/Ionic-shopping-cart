import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage) {
  	this.storage.set('cartItems', []);
  }

  items: { id: number, name: string };
  toCart: { id: number, name: string };

  ionViewWillEnter(){
  	this.items = [{ id: 1, name: "iPhone"},{ id: 2, name: "Samsung"},{ id: 3, name: "OnePlus"},{ id: 4, name: "LG"}];
  	console.log(this.items);	
  }

  addToCart(item){
  	this.storage.get('cartItems').then((val) => {
  		val.push(item);
  		this.storage.set('cartItems', val);
  	})
  }
}
