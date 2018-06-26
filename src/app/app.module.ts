import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router,RouterModule} from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RegformComponent } from './regform/regform.component';



const approuting=[

{path:'register',component:RegformComponent},
{ path: 'admin',  loadChildren: 'app/admin/admin.module#AdminModule',
},
{ path: 'home',  loadChildren: 'app/home/home.module#HomeModule',
}

]

@NgModule({
  declarations: [
    AppComponent,
    RegformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
