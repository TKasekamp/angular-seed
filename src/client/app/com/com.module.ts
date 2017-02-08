import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComComponent } from './com.component';
import { ComRoutingModule } from './com-routing.module';

@NgModule({
  imports: [CommonModule, ComRoutingModule],
  declarations: [ComComponent],
  exports: [ComComponent]
})
export class ComModule { }
