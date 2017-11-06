import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamewaitingPage } from './gamewaiting';

@NgModule({
  declarations: [
    GamewaitingPage,
  ],
  imports: [
    IonicPageModule.forChild(GamewaitingPage),
  ],
})
export class GamewaitingPageModule {}
