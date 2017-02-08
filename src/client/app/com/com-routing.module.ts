import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComComponent } from './com.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'com', component: ComComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ComRoutingModule { }
