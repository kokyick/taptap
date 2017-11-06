import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { CategorymodalPage } from "../categorymodal/categorymodal";
/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  roomNum:any=231;
  username:any;
  userInRoom=[{name:"Slyvester",score:0},{name:"Roy",score:0},{name:"Simone",score:0},{name:"Edger",score:0}];
  gamestarted=false;
  private maxTime =3;
  start=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    var self=this;
    self.username = navParams.get('param1');
    self.userInRoom.push({name : self.username, score : 0});
    self.roomNum = navParams.get('param2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }
  startgame(){
    this.start=1;
    var self=this;
    self.gamestarted=true;
    setTimeout(x => 
      {
        if(self.maxTime <= 0) { 
          self.navCtrl.push(CategorymodalPage,{param1: self.username,param2: self.userInRoom,param3: self.roomNum});
        }else{
          self.maxTime -= 1;
          self.startgame();
        }
      }, 1000);
  }
  leaveroom(){
    var self=this;
    this.navCtrl.setRoot(HomePage,{param1: 2,param2: self.username })
  }

}
