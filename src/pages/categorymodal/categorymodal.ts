import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GamePage } from "../game/game";
/**
 * Generated class for the CategorymodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorymodal',
  templateUrl: 'categorymodal.html',
})

export class CategorymodalPage {
  maxTime:any=5;

  cat1:any=0;
  cat2:any=0;
  cat3:any=0;
  cat4:any=0;
  cat5:any=0;
  cat6:any=0;

  checker:any="";

  username:any;
  userInRoom:any;
  roomNum:any;

  winnercat:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var self=this;
    self.username = navParams.get('param1');
    self.userInRoom = navParams.get('param2');
    self.roomNum = navParams.get('param3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorymodalPage');
    this.startgame();
  }
  startgame(){
    var self=this;
    setTimeout(x => 
      {
        if(self.maxTime <= 0) { 
          self.checkwinnercat();
          self.navCtrl.push(GamePage,{param1: self.username,param2: self.userInRoom,param3: self.roomNum, param4:self.winnercat});
        }else{
          self.maxTime -= 1;
          self.startgame();
        }
      }, 1000);
  }
  checkwinnercat(){
    var self=this;
    
    if (self.cat1>=self.cat2 && self.cat1>=self.cat3 && self.cat1>=self.cat4 && self.cat1>=self.cat5 && self.cat1>=self.cat6){
      self.winnercat="cat1";
    }
    if(self.cat2>=self.cat1 && self.cat2>=self.cat3 && self.cat2>=self.cat4 && self.cat2>=self.cat5 && self.cat2>=self.cat6)
      self.winnercat="cat2";
    if(self.cat3>=self.cat1 && self.cat3>=self.cat2 && self.cat3>=self.cat4 && self.cat3>=self.cat5 && self.cat3>=self.cat6)
      self.winnercat="cat3";
    if(self.cat4>=self.cat1 && self.cat4>=self.cat3 && self.cat4>=self.cat2 && self.cat4>=self.cat5 && self.cat4>=self.cat6)
      self.winnercat="cat4";
    if(self.cat5>=self.cat1 && self.cat5>=self.cat3 && self.cat5>=self.cat4 && self.cat5>=self.cat2 && self.cat5>=self.cat6)
      self.winnercat="cat5";
    if(self.cat6>=self.cat1 && self.cat6>=self.cat2 && self.cat6>=self.cat3 && self.cat6>=self.cat4 && self.cat6>=self.cat5)
      self.winnercat="cat6";
    if(self.winnercat=="")
      self.winnercat="cat6";
  }
  checkerfunc(){
    var self=this;
    if (self.checker=="cat1"){
      self.cat1-=1;
    }
    else if (self.checker=="cat2"){
      self.cat2-=1;
    }
    else if (self.checker=="cat3"){
      self.cat3-=1;
    }
    else if (self.checker=="cat4"){
      self.cat4-=1;
    }
    else if (self.checker=="cat5"){
      self.cat5-=1;
    }
    else if (self.checker=="cat6"){
      self.cat6-=1;
    }
  }
  cat1click(){
    var self=this;
    if (self.checker==""){
      self.cat1+=1;
      self.checker="cat1";
    }else{
      self.checkerfunc();
      self.cat1+=1;
      self.checker="cat1";
    }
  }
  cat2click(){
    var self=this;
    if (self.checker==""){
      self.cat2+=1;
      self.checker="cat2";
    }else{
      self.checkerfunc();
      self.cat2+=1;
      self.checker="cat2";
    }
  }
  cat3click(){
    var self=this;
    if (self.checker==""){
      self.cat3+=1;
      self.checker="cat3";
    }else{
      self.checkerfunc();
      self.cat3+=1;
      self.checker="cat3";
    }
  }
  cat4click(){
    var self=this;
    if (self.checker==""){
      self.cat4+=1;
      self.checker="cat4";
    }else{
      self.checkerfunc();
      self.cat4+=1;
      self.checker="cat4";
    }
  }
  cat5click(){
    var self=this;
    if (self.checker==""){
      self.cat5+=1;
      self.checker="cat5";
    }else{
      self.checkerfunc();
      self.cat5+=1;
      self.checker="cat5";
    }
  }
  cat6click(){
    var self=this;
    if (self.checker==""){
      self.cat6+=1;
      self.checker="cat6";
    }else{
      self.checkerfunc();
      self.cat6+=1;
      self.checker="cat6";
    }
  }

}
