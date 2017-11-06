import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { RoomPage } from "../room/room";
import { RoommodalPage } from "../roommodal/roommodal";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pager = 1;
  username:any="";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
    var self=this;
    if(navParams.get('param1')){
      self.pager = navParams.get('param1');
      if (self.username=="")
        self.username = navParams.get('param2');
    }
  }
  goStep2(){
    this.pager=2;
  }
  goToRoom(){
    var self=this;
    this.navCtrl.push(RoomPage,{param1: self.username,param2: 211});
  }
  chooseRoom(){
    var self=this;
    let myModal = this.modalCtrl.create(RoommodalPage,{param1: self.username});
    myModal.present();
  }

}
