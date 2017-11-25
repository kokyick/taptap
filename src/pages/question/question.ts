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
  maxTime:any=10;

  anss:any="";
  ans:any=false;
  maxTimeAns:any=3;
  correct:any;

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
  checkans(){
    console.log("checking");
    this.ans=true;
    if(this.anss=='dog')
      this.correct=true;
    else
      this.correct=false;
    this.anscountdown();
  }
  anscountdown(){
    var self=this;
    setTimeout(x => 
      {
        if(self.maxTimeAns <= 0) { 
          self.navCtrl.pop();
        }else{
          self.maxTimeAns -= 1;
          self.anscountdown();
        }
      }, 1000);
  }
  countdown(){
    var self=this;
    setTimeout(x => 
      {
        if(self.maxTime <= 0) { 
          self.checkans();
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
