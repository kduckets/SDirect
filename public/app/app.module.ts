import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent }  from './app.component';
import { ContactFormComponent } from './contact-form.component';


export const firebaseConfig = {
apiKey: "AIzaSyDGoqUEVQOZSAd8WBmfySF2fkAeRJ_R2Ds",
authDomain: "strings-direct.firebaseapp.com",
databaseURL: "https://strings-direct.firebaseio.com",
storageBucket: "strings-direct.appspot.com",
messagingSenderId: "760983332161"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    JsonpModule
  ],
  declarations: [
    AppComponent,
    ContactFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
