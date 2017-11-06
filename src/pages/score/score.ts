import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { RoomPage } from "../room/room";
/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  username:any;
  userInRoom:any;
  roomNum:any;
  winnercat:any;
  userScore=[{name:"Slyvester",score:3},{name:"Roy",score:2},{name:"Simone",score:1},{name:"Edger",score:4}];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var self=this;
    self.username = navParams.get('param1');
    self.userInRoom = navParams.get('param2');
    self.roomNum = navParams.get('param3');
    self.winnercat = navParams.get('param4');
    self.userScore.push({name : self.username, score : 0});
  }

  ionViewDidLoad() {
    var self=this;
    self.userScore.sort( self.predicateBy("score") );
    console.log('ionViewDidLoad ScorePage');
  }
  predicateBy(prop){
    return function(a,b){
       if( a[prop] < b[prop]){
           return 1;
       }else if( a[prop] > b[prop] ){
           return -1;
       }
       return 0;
    }
 }
 startgame(){
  var self=this;
  this.navCtrl.setRoot(RoomPage,{param1: self.username,param2: self.roomNum});
 }
 leaveroom(){
    var self=this;
    self.navCtrl.setRoot(HomePage,{param1: 2,param2: self.username })
 }
}
