import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsmodalPage } from './commentsmodal';

@NgModule({
  declarations: [
    CommentsmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentsmodalPage),
  ],
  exports: [
    CommentsmodalPage
  ]
})
export class CommentsmodalPageModule {}
