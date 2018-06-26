import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule} from '@angular/router';
import { AdhomeComponent } from './adhome/adhome.component';


const adminroutes=[

  {path:'',component:AdhomeComponent}
 
  
  ]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminroutes)
  ],
  declarations: [AdhomeComponent]
})
export class HomeModule { }
