import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  question:any;
  answers:any=[];
  ans:any;
  maxTime:any=10;

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
    var self=this;
    console.log('ionViewDidLoad QuestionPage');
    self.question="Which animals love bones?";
    self.answers=['cat','dog','rabbit','dinosaur'];
    self.countdown();
  }
  countdown(){
    var self=this;
    setTimeout(x => 
      {
        if(self.maxTime <= 0) { 
          self.navCtrl.pop();
        }else{
          self.maxTime -= 1;
          self.countdown();
        }
      }, 1000);
  }
  submit(){
    var self=this;
    self.maxTime=0;
  }

}