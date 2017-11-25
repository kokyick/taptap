import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GamewaitingPage } from "../gamewaiting/gamewaiting";
import { QuestionPage } from "../question/question";
import { ScorePage } from "../score/score";
/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  tops:any="100%";
  lefts:any="100%";

  username:any;
  userInRoom:any;
  roomNum:any;
  winnercat:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var self=this;
    self.username = navParams.get('param1');
    self.userInRoom = navParams.get('param2');
    self.roomNum = navParams.get('param3');
    self.winnercat = navParams.get('param4');
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad GamePage');
    var self=this;
    self.moveghost();
  }
  ionViewWillEnter(){
    var self=this;
    self.changePos();
  }
  moveghost(){
    var self=this;

    setTimeout(x => 
    {
      self.changePos();
      self.moveghost();
    }, 500);

  }


  changePos() {
    var self=this;
    var top = Math.floor(Math.random() * 91);
    self.tops = top.toString() + "%";
    console.log("top: " + self.tops);
    var left = Math.floor(Math.random() * 91);
    self.lefts = left.toString() + "%";
    console.log("left: " + self.lefts);
  }
  ghosttouched(){
    var self=this;
    var test = Math.floor(Math.random() * 100);
    
    if(test%2==0)
      self.navCtrl.push(QuestionPage,{param1: self.username,param2: self.userInRoom,param3: self.roomNum, param4:self.winnercat});
    else if(test%9==0)
    self.navCtrl.push(ScorePage,{param1: self.username,param2: self.userInRoom,param3: self.roomNum, param4:self.winnercat});
    else
      self.navCtrl.push(GamewaitingPage,{param1: self.username,param2: self.userInRoom,param3: self.roomNum, param4:self.winnercat});
  }
}
