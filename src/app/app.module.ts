import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CategorymodalPage } from '../pages/categorymodal/categorymodal';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoommodalPage } from '../pages/roommodal/roommodal';
import { RoomPage } from '../pages/room/room';
import { GamePage } from '../pages/game/game';
import { GamewaitingPage } from '../pages/gamewaiting/gamewaiting';
import { QuestionPage } from '../pages/question/question';
import { ScorePage } from '../pages/score/score';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoomPage,
    RoommodalPage,
    CategorymodalPage,
    GamePage,
    GamewaitingPage,
    QuestionPage,
    ScorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoomPage,
    RoommodalPage,
    CategorymodalPage,
    GamePage,
    GamewaitingPage,
    QuestionPage,
    ScorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
