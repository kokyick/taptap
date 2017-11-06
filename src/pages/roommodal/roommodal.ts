import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { RoomPage } from "../room/room";
/**
 * Generated class for the RoommodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roommodal',
  templateUrl: 'roommodal.html',
})
export class RoommodalPage {
  roomnum:any;
  username:any="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,) {
    var self=this;
    self.username = this.navParams.get('param1');
  }
  closeModal() {
    var self=this;
    this.navCtrl.setRoot(RoomPage,{param1: self.username, param2: self.roomnum});
    
    //this.viewCtrl.dismiss();
  }
  cancelModal() {
    var self=this;
    self.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RoommodalPage');
  }

}
