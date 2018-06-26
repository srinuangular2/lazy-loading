import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule} from '@angular/router';
import { AdcomComponent } from './adcom/adcom.component';


const adminroutes=[

  {path:'',component:AdcomComponent}
 
  
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminroutes)
  ],
  declarations: [AdcomComponent]
})
export class AdminModule { }
